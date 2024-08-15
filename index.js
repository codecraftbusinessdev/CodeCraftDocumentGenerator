const generatePDF = async (name)=>{
    
    const form = document.getElementById('certificateForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const certificateId = document.getElementById('certificateId').value;
        const name = document.getElementById('name').value;
        const collegeName = document.getElementById('collegeName').value;
        const internshipTrack = document.getElementById('internshipTrack').value;
        const issueDate = document.getElementById('issueDate').value;

        // Do something with the collected values, e.g.,
        console.log(certificateId, name, collegeName, internshipTrack, issueDate);
        const {PDFDocument,rgb} = PDFLib;

        const exBytes = await fetch("./empty_cert.pdf").then((res)=>
            {return res.arrayBuffer();}
        )
       
        const r_Font = await fetch("./Poppins-Regular.ttf").then((res)=>
            {return res.arrayBuffer();})
    
        const b_Font = await fetch("./Poppins-SemiBold.ttf").then((res)=>
            {return res.arrayBuffer();})
    
        const pdfDoc = await PDFDocument.load(exBytes);
    
        pdfDoc.registerFontkit(fontkit);
        const regulerFont = await pdfDoc.embedFont(r_Font);
        const boldFont = await pdfDoc.embedFont(b_Font);
    
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
    
    
        const certificateIdText = document.getElementById('certificate_Id').value
        // const internshipTrackSize = 20;
        // const internshipTrackWidth = internshipTrackText.length * (internshipTrackSize / 2);
    
        firstPage.drawText(certificateIdText,{
            x: 671,
            y: 520,
            color:rgb(0.118, 0.212, 0.325),
            font:boldFont,
            size : 19
        })

        const studentNameText = document.getElementById('name').value;
        const studentNameSize = 40;
        const studentNameWidth = boldFont.widthOfTextAtSize(studentNameText,studentNameSize);
        
        firstPage.drawText(studentNameText,{
            x: ((firstPage.getWidth()) - studentNameWidth) / 2 ,
            y:320,
            color:rgb(0.882, 0.655, 0.188),
            font:boldFont,
            size : 40
        })
    
        const collegeNameText = document.getElementById('collegeName').value;
        const fullCollegeNameText = "From "+collegeNameText
        const collegeNameSize = 20;
        const collegeNameWidth = boldFont.widthOfTextAtSize(fullCollegeNameText,collegeNameSize);

        firstPage.drawText(fullCollegeNameText,{
            
            x: (firstPage.getWidth() - collegeNameWidth) / 2  ,
            y: 280,
            color:rgb(0.118, 0.212, 0.325),
            font:boldFont,
            size : 20
        })
    
    
        const internshipTrackText = document.getElementById('internshipTrack').value;
        // const internshipTrackSize = 20;
        // const internshipTrackWidth = internshipTrackText.length * (internshipTrackSize / 2);
    
        firstPage.drawText(internshipTrackText,{
            
            x: 360,
            y: 205,
            color:rgb(0.118, 0.212, 0.325),
            font:boldFont,
            size : 20
        })
    
        const issueDateText = document.getElementById('issueDate').value;
        // const internshipTrackSize = 20;
        // const internshipTrackWidth = internshipTrackText.length * (internshipTrackSize / 2);
    
        firstPage.drawText(issueDateText,{
            x: 580,
            y: 100,
            color:rgb(0.118, 0.212, 0.325),
            font:regulerFont,
            size : 19
        })
    
        const uri = await pdfDoc.saveAsBase64({dataUri : true});
        document.querySelector("#mypdf").src=uri;
        // You can send data to a server using AJAX or other methods here
    });
}


generatePDF("Chirag Patel");