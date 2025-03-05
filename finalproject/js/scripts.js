// // JavaScript functionality can be added here.
// // Member details data (You can update the details later)
// const memberData = {
//     kidtipod: {
//         title: "Kidtipod Chuntacheevakul",
//         education: "Name: Kidtipod Chuntacheevakul<br>Student ID: 65011332<br>Faculty: Engineering<br>Department: Robotics & AI<br>University: King Mongkut's Institute of Technology Ladkrabang (KMITL)",
//         about: "Write about yourself here.",
//         skills: "List your skills here.",
//         contact: "Email: 65011332@kmitl.ac.th"
//     },
//     phattawin: {
//         title: "Phattawin Kummarraphat",
//         education: "Name: Phattawin Kummarraphat<br>Student ID: 65011453<br>Faculty: [Your Faculty]<br>Department: [Your Department]<br>University: [Your University]",
//         about: "Write about yourself here.",
//         skills: "List your skills here.",
//         contact: "Email: [Your Email]"
//     },
//     nawee: {
//         title: "Nawee Pornsiriphanna",
//         education: "Name: Nawee Pornsiriphanna<br>Student ID: 65011404<br>Faculty: [Your Faculty]<br>Department: [Your Department]<br>University: [Your University]",
//         about: "Write about yourself here.",
//         skills: "List your skills here.",
//         contact: "Email: [Your Email]"
//     },
//     promporn: {
//         title: "Promporn Thongpech",
//         education: "Name: Promporn Thongpech<br>Student ID: 65011487<br>Faculty: [Your Faculty]<br>Department: [Your Department]<br>University: [Your University]",
//         about: "Write about yourself here.",
//         skills: "List your skills here.",
//         contact: "Email: [Your Email]"
//     }
// };

// Function to show member details in the modal
function showMemberDetails(memberKey) {
    const member = memberData[memberKey];
    document.getElementById("memberTitle").innerHTML = member.title;
    document.getElementById("memberEducation").innerHTML = member.education;
    document.getElementById("memberAbout").innerHTML = member.about;
    document.getElementById("memberSkills").innerHTML = member.skills;
    document.getElementById("memberContact").innerHTML = member.contact;
    
    document.getElementById("memberModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("memberModal").style.display = "none";
}

// Function to Handle Click Events and Change Layout
function toggleMemberDetails(memberKey) {
    let memberItem = document.querySelector(`[onclick="toggleMemberDetails('${memberKey}')"]`);
    let detailsDiv = document.getElementById(memberKey + "-details");
    let memberContainer = document.getElementById("member-container");

    // If details are already visible, hide them and restore horizontal layout
    if (memberItem.classList.contains("active")) {
        memberItem.classList.remove("active");
        detailsDiv.style.display = "none";
        memberContainer.classList.remove("vertical-layout");
    } else {
        // Hide all other member details
        document.querySelectorAll(".member-item").forEach(item => {
            item.classList.remove("active");
            item.querySelector(".member-details").style.display = "none";
        });

        // Show selected member's details
        memberItem.classList.add("active");
        detailsDiv.style.display = "flex"; // Use flex to align properly

        // Switch to vertical layout
        memberContainer.classList.add("vertical-layout");

        // Load dynamic details (modify as needed)
        const memberData = {
            kidtipod: {
                education: "Name: Kidtipod Chuntacheevakul<br>Student ID: 65011332<br>Faculty: Engineering<br>Department: Robotics & AI<br>University: King Mongkut's Institute of Technology Ladkrabang (KMITL)",
                about: "Hey, I'm Kidtipod from Bangkok! I love being the joker in my friend group, always up for some laughs. I enjoy watching gambling sports and am also trying my hand at CAD (computer-aided design). Life’s all about fun, friends, and learning new things!",
                skills: "CAD, Python, JavaScript, Robotics, AI",
                contact: "Email: 65011332@kmitl.ac.th"
            },
            phattawin: {
                education: "Name: Phattawin Kummarraphat<br>Student ID: 65011453<br>Faculty: Engineering<br>Department: Robotics & AI<br>University: King Mongkut's Institute of Technology Ladkrabang (KMITL)",
                about: "Hi, I'm Phattawin, a 20-year-old from Bangkok. I'm passionate about driving, especially when it comes to Mercedes Benz cars. I also enjoy playing golf in my free time. Always up for new experiences and adventures behind the wheel or on the green!",
                skills: "PLC, CAD, Robotics",
                contact: "Email: 65011453@kmitl.ac.th"
            },
            Nawee: {
                education: "Name: Nawee Pornsiriphanna<br>Student ID: 65011404<br>Faculty: Engineering<br>Department: Robotics & AI<br>University: King Mongkut's Institute of Technology Ladkrabang (KMITL)",
                about: "Hi, I'm Nawee Pornsiriphanna, a 21-year-old from Thailand. I'm passionate about traveling and exploring new places, and I absolutely love football! Whether it's playing, watching, or talking about the game, football is a huge part of my life. Looking forward to new adventures and connecting with like-minded people along the way!",
                skills: "Python, AI",
                contact: "Email: 65011404@kmitl.ac.th"
            },
            Promporn: {
                education: "Name: Promporn Thongpech<br>Student ID: 65011487<br>Faculty: Engineering<br>Department: Robotics & AI<br>University: King Mongkut's Institute of Technology Ladkrabang (KMITL)",
                about: "Hi, I'm Promporn from Bangkok. I'm a big fan of racing, especially Formula 1. I have a strong passion for engineering and love diving deep into the mechanics behind high-performance cars. Always excited about anything that combines speed and technology!",
                skills: "Python, JavaScript, Robotics",
                contact: "Email: 65011487@kmitl.ac.th"
            }
        };

        let member = memberData[memberKey];
        if (member) {
            document.getElementById(memberKey + "-education").innerHTML = member.education;
            document.getElementById(memberKey + "-about").innerHTML = member.about;
            document.getElementById(memberKey + "-skills").innerHTML = member.skills;
            document.getElementById(memberKey + "-contact").innerHTML = member.contact;
        }
    }
}

