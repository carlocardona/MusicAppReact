import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: 'Hidden Structure',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
            artist: ' Leavv, Flitz&Suppe ',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9913',
            color: ['#88694F', '#214241'],
            id: uuidv4(),
            active: true,
        },
        {
            name: 'Wildlife',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg',
            artist: ' Philanthrope, Chromonicci ',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10263',
            color: ['#A83E38', '#2E1A19'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Backyard Puddles',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg',
            artist: ' Sleepy Fish ',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10032',
            color: ['#34728F', '#C8DBDF'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Lax Incense',
            cover: 'https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg',
            artist: ' Mama Aiuto, Daphné ',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=12125',
            color: ['#633335', '#21362F'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Sugarless',
            cover: 'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg',
            artist: ' The Field Tapes, Aviino ',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11243',
            color: ['#31364A', '#EBF1E5'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Snowstalgia',
            cover: 'https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg',
            artist: ' invention_ ',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10305',
            color: ['#D6547A', '#62558B'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Sleepover',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg',
            artist: ' Nymano, JK the Sage ',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10130',
            color: ['#181413', '#776188'],
            id: uuidv4(),
            active: false,
        }
    ]
}

export default chillHop;