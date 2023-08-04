function skillsMember() {
    let skills = ['HTML', 'CSS', 'JS'];
    let member = {
        name: 'A',
        age: 10,
        skills: skills
    };
    console.log(member.skills);
    console.log(member['skills']);
    console.log(member.skills[2]);
    console.log(member['skills'][2]);
    console.log(member.skills.length);
    console.log(member['skills'].length);
    console.log(member.skills[member.skills.length - 1]);
    console.log(member['skills'][member['skills'].length - 1]);
}