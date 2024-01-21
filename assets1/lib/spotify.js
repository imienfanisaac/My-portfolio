let = data3 = []
let = data4 = []
let = data5 = []
let = data6 = []
let = data7 = []
let = data8 = []
let = data9 = []
let = info = []

function getDt() {
    fetch("json/anodaplaylist.json")
    .then(response => response.json())
    .then(jsondata => {
        data3.push(jsondata)})


    fetch("json/danceclassic.json")
    .then(response => response.json())
    .then(jsondata => {
        data4.push(jsondata)})
   
    fetch("json/feelingmyself.json")
    .then(response => response.json())
    .then(jsondata => {
        data5.push(jsondata)})
    
    fetch("json/rockparty.json")
    .then(response => response.json())
    .then(jsondata => {
        data6.push(jsondata)})


    fetch("json/shuffle.json")
    .then(response => response.json())
    .then(jsondata => {
        data7.push(jsondata)})
   
    fetch("json/throwback.json")
    .then(response => response.json())
    .then(jsondata => {
        data8.push(jsondata)})

    fetch("json/reggaeparty.json")
    .then(response => response.json())
    .then(jsondata => {
        data9.push(jsondata)})

    fetch("json/party-playlist-songs.json")
    .then(response => response.json())
    .then(jsondata => {
        info.push(jsondata)})
    
}
getDt()


 arrayOfDatas = [info, data3, data4, data5, data6, data7, data8, data9]

function renderselected() {

}