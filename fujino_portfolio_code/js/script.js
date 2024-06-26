// font
(function (d) {
    var config = {
        kitId: 'nuy0gdd',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

$(function () {
    $('body').fadeIn(1000); //1秒かけてフェードイン！
});

//  marker
document.addEventListener('DOMContentLoaded', function () {

    var markerText = document.querySelectorAll('.js-marker'); // 監視対象を選択
    var markerTextArr = Array.prototype.slice.call(markerText); // 監視対象をArrayに変換（IE対策）

    /* IntersectionObserverに渡すコールバック関数 */
    var cb = function (entries, observer) {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                /* 監視対象が画面内に入ったときのアクション */
                entry.target.classList.add('inview'); // 画面内に入った要素にinviewクラスを付与
                observer.unobserve(entry.target); // 1度発火した後監視を止める
            }

        });
    }

    /* IntersectionObserverに渡すコールバック関数 */
    var options = {
        rootMargin: "-50px 0px"
    }

    /* IntersectionObserver初期化 */
    var io = new IntersectionObserver(cb, options);
    io.POLL_INTERVAL = 100; // Polyfillの設定

    markerTextArr.forEach(el => {
        io.observe(el);
    });

});

// fadein
$(function ($) {
    var fadeIn = $('.fade-in');
    $(window).on('scroll', function () {
        $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 150) {
                $(this).addClass("scroll-in");
            }
        });
    });
});

// loding 
$(window).scroll(function () {
    $(".marker-animation").each(function () {
        var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
        var scroll = $(window).scrollTop(); //スクロールの位置を取得
        var windowHeight = $(window).height(); //ウインドウの高さを取得
        if (scroll > position - windowHeight) { //スクロール位置が要素の位置を過ぎたとき
            $(this).addClass('active'); //クラス「active」を与える
        }
    });
});
//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 2000,//時間指定(1000＝1秒)
    strokeWidth: 0.2,//進捗ゲージの太さ
    color: '#068B72',//進捗ゲージのカラー
    trailWidth: 0.2,//ゲージベースの線の太さ
    trailColor: '#EEE36E',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定
        style: {//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0',//バーより上に配置
            transform: 'translate(-50%,-50%)',
            'font-size': '1rem',
            color: '#068B72',
        },
        autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
});
//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});
// 

$(function () {

    // タイマー機能
    setTimeout(function () {
        // ページが読み込まれて3秒後にここに記述された処理が発動します。
        $('#container').fadeOut();
        //      ふわっと画面遷移
    }, 3000);

});