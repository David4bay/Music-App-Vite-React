import { v4 as uuidv4 } from 'uuid';

function data() { 
    return [
        {
            name: 'Peaceful Dissociation',
            artist: 'Guillaume Muschalle, Aviino',
            cover: 'https://i.scdn.co/image/ab67616d0000b27327f022dfef26e329791dfc9a',
            id: uuidv4(),
            active: false,
            color: ['#fff'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=55310'
        },
        {
            name: 'Fly High Newborn',
            artist: 'Aviino',
            cover: 'https://i.scdn.co/image/ab67616d0000b27327f022dfef26e329791dfc9a',
            id: uuidv4(),
            active: false,
            color: ['#fff'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=55317'
        },
        {
            name: 'Over You',
            artist: 'El Train, Paal Singh',
            cover: 'https://i.scdn.co/image/ab67616d0000b27339b5c3fe6a4512de0fc6cd36',
            id: uuidv4(),
            active: false,
            color: ['#fff'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=49367'
        },
        {
            name: 'See You Cross Country',
            artist: 'Aviino',
            cover: 'https://i.scdn.co/image/ab67616d0000b27327f022dfef26e329791dfc9a',
            id: uuidv4(),
            active: false,
            color: ['#fff'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=55315'
        },
        {
            name: 'Cabriolet',
            artist: 'Plusma Ben Bada Boom',
            cover: 'https://i.scdn.co/image/ab67616d0000b273b4a97e2992cdb556dbf6f186',
            id: uuidv4(),
            active: false,
            color: ['#fff'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=49369'
        }
    ]
}

export default data;