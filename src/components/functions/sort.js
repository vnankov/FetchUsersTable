
export default function sortArray(array){

    array.sort((a,b)=>{   
        if(a.username < b.username) {return -1;}
        if(a.username > b.username) {return 1;}
    })
}