//Xac dinh cac doi tuong
var classes = [
    {
        id : 1,
        name :'1A',
        teacher:1, 
        students:[
            {name:'Minh', height : 120},
            {name:'Minh', height : 120},
            {name:'Minh', height : 120}
        ]
    },
    {
        id : 2,
        name :'2A',
        teacher: 2
    },
    {
        id : 3,
        name :'3A',
        teacher : 3
    },
    {
        id : 4,
        name :'4A',
        teacher: 4
    },
    {
        id : 5,
        name :'5A',
        teacher : 5
    }
];
var teachers = [
    {
        id : 1,
        name : 'Quynh',
        age: 30
    }, 
    {
        id : 2,
        name : 'Chinh',
        age:50
    },
    {
        id : 3,
        name : 'Nguyet',
        age : 40
    },
    {
        id : 4,
        name : 'Huong',
        age : 35
    },
    {
        id : 5,
        name : 'Hai',
        age : 55
    }
];
var student = [
    {id : 0,name:'Minh', height : 120,class :0},
    {id : 1,name:'Minh', height : 120,class :0},
    {id : 2,name:'Minh', height : 120,class :0}
];
function getStudentInClass(className){
    var classObject = classes.find(function(x){
        x.name === className;
    });

    var studentInClass = student.filter(function(student){
        return student.class === classObject.id;
    });
    return studentInClass;
} 
var studentInClass = getStudentInClass('1A');
console.log(studentInClass);
