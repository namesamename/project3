
/* banner */
const $slide=document.querySelectorAll('.slide');
const $prev=document.getElementById('prev');
const $next=document.getElementById('next');
const $prog=document.querySelector('.progress');
const $progBtn=document.querySelectorAll('.progress span');
const $pager=document.querySelector('.pager');
const $pagerPrev=document.querySelector('.prev');
const $pagerNext=document.querySelector('.next');
const $pagerSP=document.querySelector('.stop-play');

let $slideCount=$slide.length;
let $progCount=$progBtn.length;
let $currentIdx=0;
let $timer;


// 슬라이드 이동
function goToSlider(idx){
    $currentIdx=idx;
    for(let i=0; i<$slideCount; i++){
        $slide[i].classList.remove('act');
    }
    $slide[idx].classList.add('act');
}
goToSlider(0);

// 자동 슬라이드
function autoSlide(){
    $timer=setInterval(function(){
        let nextIdx=($currentIdx+1) % $slideCount;
        goToSlider(nextIdx);
    },3000);
}
autoSlide();

// 양쪽 버튼 클릭 시 이동
/* $prev.addEventListener('click',function(){
    autoSlide(){
        
    };
    if($currentIdx==0){
        goToSlider($slideCount-1);
    }else{
        goToSlider($currentIdx-1);
    }
}); */

$pagerPrev.addEventListener('click',function(){
    if($currentIdx==0){
        goToSlider($slideCount-1);
    }else{
        goToSlider($currentIdx-1);
    }
});
$next.addEventListener('click',function(){
    if($currentIdx==$slideCount-1){
        goToSlider(0);
    }else{
        goToSlider($currentIdx+1);
    }
});
$pagerNext.addEventListener('click',function(){
    if($currentIdx==$slideCount-1){
        goToSlider(0);
    }else{
        goToSlider($currentIdx+1);
    }
});

// progress, bnr-box
function goToSlider(idx){
    $currentIdx=idx;
    for(let k=0; k<$progCount; k++){
        $progBtn[k].classList.remove('active');
    }
    $progBtn[idx].classList.add('active');
}
goToSlider(0);

for(let x=0; x<$progCount; x++){
    $progBtn[x].addEventListener('click', function(e){
        let $pageNum=e.target.innerText-1;
        goToSlider($pageNum);
    });
}



/* content */
const trgMgz=document.querySelectorAll('.mgz-l li');
const trgLink=document.querySelectorAll('.mgz-l li a');
const tabCnt=document.querySelectorAll('.mgz-img li');

for(let i=0; i<trgLink; i++){
    trgLink[i].addEventListener('click',function(e){
        let orgtrg=e.target.getAttribute('href');
        let tabtrg=orgtrg.replace("#","");
        for(let k=0; k<tabCnt; k++){
            tabCnt[k].classList.remove('img-m');
        }
        document.getElementById(tabtrg).classList.add('img-m');
        for(let j=0; j<trgMgz.length; j++){
            trgMgz[j].classList.remove('mgz-m');
            trgMgz.target.classList.add('mgz-m');
        }
    });
}