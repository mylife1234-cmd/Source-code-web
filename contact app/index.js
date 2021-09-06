var readlineSync = require('readline-sync');
var fs = require('fs');
var contacts = [];
function saveAndExit(){
    var data = JSON.stringify(contacts);
    fs.writeFileSync('./data.json',data,{encoding: 'utf8'});
} 
function addContact(){
    var name = readlineSync.question('Name: ');
    var phoneNumber = readlineSync.question('Phone number: ');
    var people = {
        name : name,
        phoneNumber : phoneNumber
    }
    var question = readlineSync.question('Do you want to save this contact ? : ')
    var check = false;
    if(question === 'y'){
        check = true;
        contacts.push(people);
        console.log(name + ' added to the contacts ');
        saveAndExit();
        showMenu();
    }
    if(question =='n'){ 
        console.log(name + ' not added to the contacts ')
        showMenu();
    }
}
function editOption(option){
    if(option === '1'){
        var name = readlineSync.question('Name: ');
        var indexName = searchIndexByName(contacts, name);
        var userCheck = indexName != -1 ? contacts[indexName] : null;
        if(userCheck){
            var userName = readlineSync.question('Name: ');
            var userPhone = readlineSync.question('Phone: ');
            var question = readlineSync.question('Do you want to save this contact ? : ')
            var check = false;
            if(question === 'y'){
                check = true;
                contacts[indexName].name = userName;
            contacts[indexName].phoneNumber = userPhone;
                console.log(name + ' edited ');
                saveAndExit();
                editContact();
            }       
            if(question =='n'){ 
                console.log(name + ' not edited ')
                editContact();
            }
        }
        else{
            console.log('Wrong name! Please check again!');
            editContact();
        }
    }
    if(option === '2'){
        var phone = readlineSync.question('PhoneNumber: ');
        var indexPhone = searchIndexByPhone(contacts, phone);
        var userCheck = indexPhone != -1 ? contacts[indexPhone] : null;
        if(userCheck){
            var userName = readlineSync.question('Name: ');
            var userPhone = readlineSync.question('Phone: ');
            var question = readlineSync.question('Do you want to save this contact ? : ')
            var check = false;
            if(question === 'y'){
                check = true;
                contacts[indexPhone].name = userName;
                contacts[indexPhone].phoneNumber = userPhone;
                console.log(phone + ' edited ');
                saveAndExit();
                editContact();
            }       
            if(question =='n'){ 
                console.log(phone + ' not edited ')
                editContact();
            }
        }
        else{
            console.log('Wrong phone! Please check again!');
            editContact();
        }
    }
    if(option === '3'){
        showMenu();
    }
}
function editContact(){
    console.log('1. Edit by name');
    console.log('2. Edit by phone number');
    console.log('3. Show main menu')
    var option = readlineSync.question('>');
    editOption(option);
}
function deleteOption(option){
    if(option === '1'){
        var name = readlineSync.question('Name: ');
        var indexName = searchIndexByName(contacts, name);
        var userCheck = indexName != -1 ? contacts[indexName] : null;
        if(userCheck){
            var question = readlineSync.question('Do you want to delete this contact ? : ')
            if(question === 'y'){
                contacts.splice(indexName,1);
                console.log(name + ' deleted ');
                saveAndExit();
                deleteContact();
            }       
            if(question =='n'){ 
                console.log(name + ' not deleted ')
                deleteContact();
            }
        }
        else{
            console.log('Wrong name! Please check again!');
            deleteContact();
        }
    }
    if(option === '2'){
        var phone = readlineSync.question('PhoneNumber: ');
        var indexPhone = searchIndexByPhone(contacts,phone);
        var userCheck = indexPhone != -1 ? contacts[indexPhone] : null;
        if(userCheck){
            var question = readlineSync.question('Do you want to delete this contact ? : ')
            if(question === 'y'){
                contacts.splice(indexPhone,1);
                console.log(phone + ' deleted ');
                saveAndExit();
                deleteContact();
            }       
            if(question =='n'){ 
                console.log(phone + ' not deleted ')
                deleteContact();
            }
        }
        else{
            console.log('Wrong phone! Please check again!');
            deleteContact();
        }
    }
    if(option === '3'){
        showMenu();
    }
}
function deleteContact(){
    console.log('1. Delete by name');
    console.log('2. Delete by phone number');
    console.log('3. Show main menu')
    var option = readlineSync.question('>');
    deleteOption(option);
}
function searchMenu(option){
    if(option === '1'){
        var question = readlineSync.question('Name: ');
        var username = question.toLowerCase();
        var listContact = contacts.filter(function(item){
            return item.name.toLowerCase().indexOf(username) >=0;
        });
        console.log(listContact);
        searchContact();
    }
    if(option ==='2'){
        var question = readlineSync.question('phoneNumber: ');
        var userPhone = question.toLowerCase();
        var listContact = contacts.filter(function(item){
            return item.phoneNumber.indexOf(userPhone) >=0;
        });
        console.log(listContact);
        searchContact();
    }
    if(option === '3'){
        showMenu();
    }
}
function searchContact(){
    console.log('1. Search by name');
    console.log('2. Search by phone number');
    console.log('3. Show main menu')
    var option = readlineSync.question('>');
    searchMenu(option);
}

function showAllContact(){
    for(var i of contacts ){
        console.log(i, ' ');
    }
}
function searchIndexByName(contacts, name){
    for( i = 0; i < contacts.length; i++){
        if(contacts[i].name === name){
            return i;
        }
    }
    return -1;
}
function searchIndexByPhone(contacts, phoneNumber){
    for( i = 0; i < contacts.length; i++){
        if(contacts[i].phoneNumber === phoneNumber){
            return i;
        }
    }
    return -1;
}
function loadData(){
    var data = fs.readFileSync('./data.json',{encoding : 'utf8'});
    contacts = JSON.parse(data);
}
//function change_alias(alias) {
//    var str = alias;
//    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
//    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
//    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
//    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
//    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
//    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
//    str = str.replace(/đ/g, "d");
//    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
//    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
//    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
//    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
//    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
//    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
//    str = str.replace(/Đ/g, "D");
//    str = str.trim(); 
//    return str;
//}
function chooseOption(option){
    switch(option){
        case '1':
            addContact();
            break;
        
        case '2':
            editContact();
            break;
        
        case '3':
            deleteContact();
            break;
        
        case '4':
            searchContact();
            break;
        
        case '5':
            showAllContact();
            break;

        default:
            console.log('Wrong option! Please check again !');
            showMenu();
            break;
    }
}
function showMenu(){
    console.log('1. Add Contact ');
    console.log('2. Edit Contact ');
    console.log('3. Delete Contact ');
    console.log('4. Search Contact ');
    console.log('5. Show All Contact')
    var option = readlineSync.question('>');
    chooseOption(option);
}

function main(){
    loadData();
    showMenu();
}
main();