// 時間間隔　を設定
// appearクラスをつけかえる関数

// setINterval(function関数,時間)=>繰り返し関数が実行される
// setTimeout(function関数,時間)=>一度だけ関数が実行される

let i = 0

const slide = ()=> {
    // ノードの取得
    const img = document.getElementsByClassName("pig-img")
    // 
    // ノードの入れ替え処理..claslist
    if (i>1) {
        img[i].classList.remove("appear")
        i=0
        img[i].classList.add("appear")
    }else{
        img[i].classList.remove("appear")
        i++
        img[i].classList.add("appear")
        
    }
    
    // アニメーションの処理
}

setInterval(slide,5000)