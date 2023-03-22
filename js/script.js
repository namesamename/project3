
/* banner */
const $slide=document.querySelectorAll('#slider li');
const $prev=document.getElementById('prev');
const $next=document.getElementById('next');
const $prog=document.querySelector('.progress');
const $progBtn=document.querySelectorAll('.progress span');
const $pager=document.querySelector('.pager');
const $pagerPrev=document.querySelector('.prev');
const $pagerNext=document.querySelector('.next');
const $pageIdx=document.querySelector('.page span');
const $pagerSP=document.querySelector('.stop-play');

let $slideCount=$slide.length;
let $progCount=$progBtn.length;
let $currentIdx=0;
let $progIdx=0;
let $timer;
let $count=2;


// 슬라이드 이동
function goToSlider(idx){
    $currentIdx=idx;
    for(let i=0; i<$slideCount; i++){
        $slide[i].classList.remove('act');
    }
    $slide[idx].classList.add('act');
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
    $progBtn[x].addEventListener('click', function(e){
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
$pagerSP.addEventListener('click',function(){
    for(let j=0; j<$count; j++){
        let stoplay=(j%2);
        if(stoplay==0){
            j=0;
            autoSlide();
        }else if(stoplay==1){
            clearInterval($timer);
        }
    }
});

// 양쪽 버튼 클릭 시 이동
$prev.addEventListener('click',function(){
    clearInterval($timer);
    if($currentIdx==0){
        goToSlider($slideCount-1);
        goToProg($slideCount-1);
    }else{
        goToSlider($currentIdx-1);
        goToProg($progIdx-1);
    }
});
$pagerPrev.addEventListener('click',function(){
    clearInterval($timer);
    if($currentIdx==0){
        goToSlider($slideCount-1);
        goToProg($slideCount-1);
    }else{
        goToSlider($currentIdx-1);
        goToProg($progIdx-1);
    }
});
$next.addEventListener('click',function(){
    clearInterval($timer);
    if($currentIdx==0){
        goToSlider($currentIdx+1);
        goToProg($currentIdx+1);
    }else if($currentIdx==$slideCount-1){
        goToSlider(0);
        goToProg(0);
    }else{
        goToSlider($currentIdx+1);
        goToProg($progIdx+1);
    }
});
$pagerNext.addEventListener('click',function(){
    clearInterval($timer);
    if($currentIdx==0){
        goToSlider($currentIdx+1);
        goToProg($currentIdx+1);
    }else if($currentIdx==$slideCount-1){
        goToSlider(0);
        goToProg(0);
    }else{
        goToSlider($currentIdx+1);
        goToProg($progIdx+1);
    }
});

// bnr-box
function pageNum(){
    $pageIdx.innerHTML=$currentIdx+"/ 8"
}
pageNum();



/* content */
//mgz
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