
/* nav */
const $navLeft=document.querySelectorAll('.nav-left>li');
const $navLFlip=document.querySelectorAll('.nav-left li ul');
const $bg=document.querySelector('.bg');

for(let n=0; n<$navLeft.length; n++){
    $navLeft[n].addEventListener('mouseover',function(){
        $bg.style.display='block';
        $navLFlip.forEach($navLFlip => {
            $navLFlip.style.display='block';
        });
    });
    $navLeft[n].addEventListener('mouseout',function(){
        $bg.style.display='none';
        $navLFlip.forEach($navLFlip => {
            $navLFlip.style.display='none';
        });
    });
    $bg.addEventListener('mouseover',function(){
        $bg.style.display='block';
        $navLFlip.forEach($navLFlip => {
            $navLFlip.style.display='block';
        });
    });
    $bg.addEventListener('mouseout',function(){
        $bg.style.display='none';
        $navLFlip.forEach($navLFlip => {
            $navLFlip.style.display='none';
        });
    });
}

// nav fixed
const $gnb=document.querySelector('.gnb');
const $nav=document.getElementById('nav');

let $gnbHeight=$gnb.offsetHeight;

document.addEventListener('scroll',function(){
    let $currScrollValue=document.documentElement.scrollTop;
    
    if($currScrollValue>=$gnbHeight){
        $nav.classList.add('fixed');
        $bg.classList.add('fixed');
    }else{
        $nav.classList.remove('fixed');
        $bg.classList.remove('fixed');
    }
});



/* banner */
const $slide=document.querySelectorAll('#slider li');
const $prev=document.getElementById('prev');
const $next=document.getElementById('next');
const $prog=document.querySelector('.progress');
const $progBtn=document.querySelectorAll('.progress span');
const $pager=document.querySelector('.pager');
const $pagerPrev=document.querySelector('.prev');
const $pagerNext=document.querySelector('.next');
const $page=document.querySelector('.n-page');
const $pagerSP=document.querySelector('.stop-play');

let $slideCount=$slide.length;
let $progCount=$progBtn.length;
let $currentIdx=0;
let $progIdx=0;
let $pageIdx=0;
let $timer;


// 슬라이드 이동
function goToSlider(idx){
    $currentIdx=idx;
    for(let i=0; i<$slideCount; i++){
        $slide[i].classList.remove('act');
    }
    $slide[idx].classList.add('act');
    $page.innerText=$currentIdx+1;
}
goToSlider(0);

// progress
function goToProg(idx){
    $progIdx=idx;
    for(let k=0; k<$progCount; k++){
        $progBtn[k].classList.remove('active');
    }
    $progBtn[idx].classList.add('active');
}
goToProg(0);

for(let x=0; x<$progCount; x++){
    $progBtn[x].addEventListener('click',function(e){
        let $pageNum=e.target.innerText-1;
        goToSlider($pageNum);
        goToProg($pageNum);
    });
}

// 자동 슬라이드
function autoSlide(){
    $timer=setInterval(function(){
        let nextIdx=($currentIdx+1) % $slideCount;
        goToSlider(nextIdx);
        goToProg(nextIdx);
    },3000);
}
autoSlide();

// stop-play
function autoStop(){
    clearInterval($timer);
    $pagerSP.style.backgroundPosition='50% -40px';
}

let sp=true;
$pagerSP.addEventListener('click',function(){
    if(sp){
        autoStop();
        sp=false;
    }else{
        autoSlide();
        $pagerSP.style.backgroundPosition='50% -60px';
        sp=true;
    }
});


// 양쪽 버튼 클릭 시 이동
$prev.addEventListener('click',function(){
    autoStop();
    if($currentIdx==0){
        goToSlider($slideCount-1);
        goToProg($slideCount-1);
    }else{
        goToSlider($currentIdx-1);
        goToProg($progIdx-1);
    }
});
$pagerPrev.addEventListener('click',function(){
    autoStop();
    if($currentIdx==0){
        goToSlider($slideCount-1);
        goToProg($slideCount-1);
    }else{
        goToSlider($currentIdx-1);
        goToProg($progIdx-1);
    }
});
$next.addEventListener('click',function(){
    autoStop();
    if($currentIdx==$slideCount-1){
        goToSlider(0);
        goToProg(0);
    }else{
        goToSlider($currentIdx+1);
        goToProg($progIdx+1);
    }
});
$pagerNext.addEventListener('click',function(){
    autoStop();
    if($currentIdx==$slideCount-1){
        goToSlider(0);
        goToProg(0);
    }else{
        goToSlider($currentIdx+1);
        goToProg($progIdx+1);
    }
});



/* content */
// mgz
const $targetLink=document.querySelectorAll('.mgz-l a');
const $tabContent=document.querySelectorAll('.mgz-img li');

let $linkCount=$targetLink.length;

for(let i=0; i<$linkCount; i++){
    $targetLink[i].addEventListener('click',function(e){
        let $orgTaget=e.target.getAttribute('href');
        let $tabTarget=$orgTaget.replace("#","");
        for(let k=0; k<$tabContent.length; k++){
            $tabContent[k].classList.remove('img-m');
        }
        document.getElementById($tabTarget).classList.add('img-m');
        for(let j=0; j<$linkCount; j++){
            $targetLink[j].classList.remove('mgz-m');
            e.target.classList.add('mgz-m');
        }
    });
}

// bnr-s
const $bnrS=document.querySelectorAll('.bnr-wrap li');
const $bnrSPrev=document.querySelector('.bnrsprev');
const $bnrSNext=document.querySelector('.bnrsnext');

let $bnrSCount=$bnrS.length;
let $bnrSIdx=0;

function bnrMove(idx){
    $bnrSIdx=idx
    for(let i=0; i<$bnrSCount; i++){
        $bnrS[i].classList.remove('active');
    }
    $bnrS[idx].classList.add('active');
}
bnrMove(0);

$bnrSPrev.addEventListener('click',function(){
    if($bnrSIdx==0){
        bnrMove($bnrSCount-1);
    }else{
        bnrMove($bnrSIdx-1);
    }
});
$bnrSNext.addEventListener('click',function(){
    if($bnrSIdx==0){
        bnrMove($bnrSIdx+1);
    }else if($bnrSIdx==$bnrSCount-1){
        bnrMove(0);
    }else{
        bnrMove($bnrSIdx+1);
    }
});



/* eclipse */
const $elpSlide=document.querySelector('.elp-b-slide');
const $elpPrev=document.querySelector('.elp-prev');
const $elpNum=document.querySelector('.n-elp');
const $elpNext=document.querySelector('.elp-next');

let $elpSlideCount=$elpSlide.length;
let $elpCurrIdx=0;

function goToElpSlider(idx){
    $elpCurrIdx=idx;
    for(let i=0; i<$elpSlideCount; i++){
        $elpSlide[i].classList.remove('show');
    }
    $elpSlide[idx].classList.add('show');
    $elpNum.innerText=$elpCurrIdx+1;
}
goToElpSlider(0);

$prev.addEventListener('click',function(){
    if($elpCurrIdx==0){
        goToElpSlider($elpSlideCount-1);
    }else{
        goToElpSlider($elpCurrIdx-1);
    }
});

$next.addEventListener('click',function(){
    if($elpCurrIdx==$elpSlideCount-1){
        goToElpSlider(0);
    }else{
        goToElpSlider($elpCurrIdx+1);
    }
});