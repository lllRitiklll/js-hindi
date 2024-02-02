const myObject ={
    js: 'javascript',
    cpp : 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const progLang = ["py", "js", "cpp", "java", "rb"]

for (const key in progLang) {
   console.log(progLang[key]);
}