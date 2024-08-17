const generateOfferLetter = async (name)=>{

    const generateButton = document.getElementById('generateButton');

    generateButton.addEventListener('click', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const letterId = document.getElementById('letterId').value;
                const letterName = document.getElementById('letterName').value;
                const letterInternshipDuration = document.getElementById('letterInternshipDuration').value;
                const letterInternshipTrack = document.getElementById('letterInternshipTrack').value;
                const letterIssueDate = document.getElementById('letterIssueDate').value;
                const letterStartDate = document.getElementById('letterStartDate').value;
                const letterEndDate = document.getElementById('letterEndDate').value;

                // Do something with the collected values, e.g.,
                console.log(letterId, letterName,letterInternshipTrack, letterIssueDate,letterStartDate,letterEndDate);
                const {PDFDocument,rgb} = PDFLib;

                const exBytes = await fetch("./empty_offer_letter.pdf").then((res)=>
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


                // const internshipTrackSize = 20;
                // const internshipTrackWidth = internshipTrackText.length * (internshipTrackSize / 2);

                firstPage.drawText("Date : ",{
                    x: 60,
                    y: 670,
                    font:regulerFont,
                    size : 16
                })

                firstPage.drawText(letterIssueDate,{
                    x: 110,
                    y: 670,
                    font:boldFont,
                    size : 16
                })

                firstPage.drawText("CT.NO : ",{
                    x: 380,
                    y: 670,
                    font:regulerFont,
                    size : 16
                });

                firstPage.drawText(letterId,{
                    x: 440,
                    y: 670,
                    font:boldFont,
                    size : 16
                });

                firstPage.drawText("Dear",{
                     x: 60,
                     y: 620,
                     font:regulerFont,
                     size : 16
                });

                firstPage.drawText(letterName+",",{
                     x: 105,
                     y: 620,
                     font:boldFont,
                     size : 16
                });

                firstPage.drawText("We are pleased to offer you the position of ",{
                     x: 60,
                     y: 580,
                     font:regulerFont,
                     size : 14
                });

                firstPage.drawText(letterInternshipTrack,{
                     x: 360,
                     y: 580,
                     font:boldFont,
                     size : 14
                });

                firstPage.drawText("Intern at Code Craft. This is an educational internship. As a valued",{
                     x: 60,
                     y: 560,
                     font:regulerFont,
                     size : 14
                });

                firstPage.drawText("member of our team, you will have the opportunity to gain hands-on",{
                     x: 60,
                     y: 540,
                     font:regulerFont,
                     size : 14
                });
                firstPage.drawText("experience in this field.",{
                      x: 60,
                      y: 520,
                      font:regulerFont,
                      size : 14
                });

                firstPage.drawText("The internship is scheduled to commence on the "+ letterStartDate +" and",{
                      x: 60,
                      y: 480,
                      font:regulerFont,
                      size : 14
                });

                firstPage.drawText("will conclude on the "+ letterEndDate +" resulting in a " + letterInternshipDuration + " duration for",{
                      x: 60,
                      y: 460,
                      font:regulerFont,
                      size : 14
                });
                firstPage.drawText("the program.",{
                      x: 60,
                      y: 440,
                      font:regulerFont,
                      size : 14
                });
                firstPage.drawText("You also agree that you will follow all of the company’s policies that",{
                      x: 60,
                      y: 400,
                      font:regulerFont,
                      size : 14
                });
                firstPage.drawText("apply to non-employee interns. This letter constitutes the complete",{
                      x: 60,
                      y: 380,
                      font:regulerFont,
                      size : 14
                });
                firstPage.drawText("understanding between you and the company regarding your",{
                      x: 60,
                      y: 360,
                      font:regulerFont,
                      size : 14
                });
                firstPage.drawText("internship and supersedes all prior discussions or agreements. This",{
                      x: 60,
                      y: 340,
                      font:regulerFont,
                      size : 14
                });
                firstPage.drawText("letter may only be modified by a written agreement signed by both of",{
                      x: 60,
                      y: 320,
                      font:regulerFont,
                      size : 14
                });
                firstPage.drawText("us.",{
                      x: 60,
                      y: 300,
                      font:regulerFont,
                      size : 14
                });
                firstPage.drawText("We eagerly anticipate your commencement of the internship program",{
                      x: 60,
                      y: 260,
                      font:regulerFont,
                      size : 14
                });
                firstPage.drawText("at Code Craft and extend our best wishes for a prosperous experience.",{
                      x: 60,
                      y: 240,
                      font:regulerFont,
                      size : 14
                });

                const uri = await pdfDoc.saveAsBase64({dataUri : true});
                document.querySelector("#offerletter_pdf").src=uri;
        // You can send data to a server using AJAX or other methods here
    });
}

generateOfferLetter("Chirag Patel");