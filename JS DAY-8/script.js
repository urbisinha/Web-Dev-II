//Task 1: Profile section styling (ID)
//Q1. Select the section with the ID 'profile' and change its background color to cyan, add padding of 15px and center the text.
const profileSection = document.getElementById("profile");
profileSection.style.backgroundColor = "cyan";
profileSection.style.padding = "15px";
profileSection.style.textAlign = "center";

//Task 2: Highlight Important Text (ClassName)
//Q2. Select all paragraphs with the class 'important' and change their text color to red, increase font size and print total count in console.
const importantParagraphs = document.getElementsByClassName("important");
for (let i = 0; i < importantParagraphs.length; i++) {
    importantParagraphs[i].style.color = "red";
    importantParagraphs[i].style.fontSize = "30px"; // Increased font size
}
console.log("Total important paragraphs:", importantParagraphs.length); 

//Task 3: Paragraph 