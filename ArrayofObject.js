let array = [

   {
        name: "Kapil",
        Roll: 1,
        School: "DPS"
    },

    {
        name: "Shivani",
        Roll: 2,
        School:"Army"
    },

    {
        name: "Rajdeep",
        Roll: 3,
        School: "Kanpur Public School"
    }


]

for(let i =0; i<array.length;i++){
    const {name,Roll,School} = array[i];
    console.log(`Name - ${name}`)
    console.log(`Roll - ${Roll}`)
    console.log(`School - ${School}`)
    console.log("--------------------------------------")

}