//메뉴 슬라이드
$(".category_item").click(function()
    {
        var subcategory = $(this).next("ul");
        var allow = $(this).children('i');

        if(subcategory.is(":visible")) 
        {
            subcategory.slideUp();
            allow.attr('class','fa-solid fa-angle-down');
        }
        else 
        {
            subcategory.slideDown();
            allow.attr('class','fa-solid fa-angle-up');
        }
});

//타이핑
const $text = document.querySelector(".typing");
const letters = ["Hello World!", "Welcome to my blog!"];
const speed = 70;
let i = 0;

function wait(ms) 
{
    return new Promise(res => setTimeout(res, ms))
}
const typing = async () => 
{    
    while(i < letters.length) 
    {
        var letter = letters[i].split("");
        while (letter.length) 
        {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }
        
        await wait(800);
        
        letter = letters[i].split("");
        while (letter.length) 
        {
            await wait(speed);
            letter.pop();
            $text.innerHTML = letter.join(""); 
        }

        i++;
        if (i >= letters.length)
        {
            i=0;
            await wait(800);
        }
    }
}

typing();


