let api_key = "AIzaSyCykPqBJfN1OeCvGmyJrAlNN0tIpnORo0Q";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";


async function getData() {

    let channels;
    try {
        const data = await fetch(video_http + new URLSearchParams({
            key: api_key,
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 40,
            regionCode: 'IN',
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }))

        //collect Response
        channels = await data.json();
        console.log(channels);

    } catch (error) {
        console.log(error)
    }

}

getData();

// Write functionality to display the data

async function displaydata() {
    let channels = await getData()
    console.log(channels.kind)

    const videoCardContainer = document.querySelector('.video-container');
    videoCardContainer.innerHTML = ""




}
displaydata()



// while displaying data is is showing Uncaught (in promise) TypeError i will rectify it as time being i am submmitiing my 
//code.