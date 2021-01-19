import {v4 as uuidv4} from "uuid";

function chillHop(){
    return [
        {
            name: 'Hidden Structure',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
            artist: ' Leavv, Flitz&Suppe ',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9913',
            color: ['#88694F','#214241'],
            id: uuidv4(),
            active: true,
        },
        {
            name: 'Wildlife',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg',
            artist: ' Philanthrope, chromonicci ',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10263',
            color: ['#A83E38','#2E1A19'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Backyard Puddles',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg',
            artist: ' Sleepy Fish ',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10032',
            color: ['#34728F','#C8DBDF'],
            id: uuidv4(),
            active: false,
        }
    ]  
}

export default chillHop;