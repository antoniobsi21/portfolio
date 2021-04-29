let txt = 'Welcome to my <span><</span>portfolio<span>/></span>',
    i = 0,
    speed = 60,
    writingTag = false,
    tagOpen = false,
    closingTag = false,
    type = true,
    tag = '',
    el = document.getElementById('typewriter'),
    temp = '';

function typeWriter() {
    if (i < txt.length) {
        console.log(writingTag, tagOpen, closingTag, txt.charAt(i));

        if(txt.charAt(i) === '<'){
            if(!tagOpen){
                writingTag = true;
                speed = 0;
            } else if(txt.charAt(i+1) == '/' ){
                i++;
                writingTag = true;
                closingTag = true;
            }
        } else if(writingTag === true && txt.charAt(i) === '>'){
            if(closingTag){
                closingTag = false;
                writingTag = false;
                tagOpen = false;
                tag = '';
            } else {
                writingTag = false;
                tagOpen = true;
                speed = 60;

                console.log(writingTag, tagOpen, closingTag);
                console.log(tag);
                let newTag = document.createElement(tag);
                tag = "";
                el.appendChild(newTag);
                temp = newTag;
                
            }
            type = false;
        } else if(writingTag && type){
            console.log(tag)
            tag += txt.charAt(i);
        } 
        if(!writingTag && !closingTag && type){
            if(tagOpen){
                temp.innerHTML += txt.charAt(i);
            } else {
                el.innerHTML += txt.charAt(i);
            }
        } else {
            type = true;
        }
        
        i++;
        setTimeout(typeWriter, speed);
    }
  }

typeWriter();