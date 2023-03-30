console.log("hello");
form=document.getElementById('input_form');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    url=document.getElementById('text_area').value;
    resolution=document.getElementById('res').value;
    console.log(url,resolution);
    if(url.trim()!=''){
        generateQR(url, resolution);
    }
})

function generateQR(url, resolution){
    let img_src=''
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${resolution}&data=${url}`)
    .then((response)=> {
        return response})
    .then((data)=>{
        console.log(data.url)
        img_src=data.url;
        let qr_html=`<div class="image">
        <img src="${img_src}" alt="">
    </div>
    <a href=${img_src} id="save_btn" download >Save QR</a>`

        document.getElementsByClassName('qr_image')[0].innerHTML=qr_html;
    })
    .catch((error)=>{
        console.log(error);
    })
}
