/*　実行
----------------------------------------*/
$(function () {
    // "use strict";
    smoothScroll();
    openHamburgerMenu();
    closeHamburgerMenu();
    downContents();
    filterList();
  });

//スムーズスクロール
function smoothScroll() {
    $('a[href^="#"]').on('click', function () {
    	var speed = 500;
    	var href = $(this).attr("href");
    	var target = $(href == "#" || href == "" ? 'html' : href);
    	var position = target.offset().top;
    	$('body,html').animate({
    		scrollTop: position
    	}, speed, 'swing');
    	return false;
    });
};

// ハンバーガーメニュー
function openHamburgerMenu() {
    $(".p-hamburger").on("click", function () {
      $(".p-hamburger_text").toggleClass("is-active");
      if ($(this).attr("aria-expanded") == "false") {
        $(this).attr("aria-expanded", true);
      } else {
        $(this).attr("aria-expanded", false);
      }

    //768以下の時
    var windowWdth = $(window).width();
    if (windowWdth < 701) {
        $(".l-gnav").toggleClass("is-active");
      }
    });
}

// ハンバーガーメニュー閉じる処理
function closeHamburgerMenu() {
    var $triggerBtn = $(".js-open-trigger a");
    $triggerBtn.on("click", function (event) {
      $(".p-hamburger").trigger("click");
    });
}

//ヘッダー高さ分のコンテンツ下げる
function downContents() {
    var height = $(".l-header").height();
    var windowWdth = $(window).width();

     //768以下の時
    if (windowWdth < 701) {
        $(".js-anchor").css("paddingTop", height);
    }
}


//絞り込み表示
function filterList() {
    // 変数を要素をセット
    var $filter = $('.js-filter-list [data-filter]'),
        $item = $('.js-filter-item-list [data-item]');

    // カテゴリをクリックしたら
    $filter.click(function (e) {
        // デフォルトの動作をキャンセル
        e.preventDefault();
        var $this = $(this);
    
        // クリックしたカテゴリにクラスを付与
        $filter.removeClass('is-active');
        $this.addClass('is-active');

        // クリックした要素のdata属性を取得
        var $filterItem = $this.attr('data-filter');

        // データ属性が all なら全ての要素を表示
        if ($filterItem == 'all') {
            $item.removeClass('is-active').fadeOut().promise().done(function () {
                $item.addClass('is-active').fadeIn();
            });

        // all 以外の場合は、クリックした要素のdata属性の値を同じ値のアイテムを表示
        } else {
            $item.removeClass('is-active').fadeOut().promise().done(function () {
                $item.filter('[data-item = "' + $filterItem + '"]').addClass('is-active').fadeIn();
            });
        }
    });
}



//背景切り替わり (GSAP)
// ---------------------------------------------
ScrollTrigger.batch("#sec01",{
    onToggle:(batch) => {
        $('body').toggleClass("js-bg01");
        $('.gnav-item').eq(0).toggleClass("js-current");
    },
    trigger: '#sec01',
    start: "top center",
    end: "bottom center",
    toggleActions: 'none none play reset',
});

ScrollTrigger.batch("#sec02",{
    onToggle:(batch) => {
        $('body').toggleClass("js-bg02");
        $('.gnav-item').eq(1).toggleClass("js-current");
    },
    trigger: '#sec02',
    start: "top center",
    end: "bottom center",
    toggleActions: 'play none play reset',
});

ScrollTrigger.batch("#sec03",{
    onToggle:(batch) => {
        $('body').toggleClass("js-bg03");
        $('.gnav-item').eq(2).toggleClass("js-current");
    },
    trigger: '#sec03',
    start: "top center",
    end: "bottom center",
    toggleActions: 'play none play reset',
});

ScrollTrigger.batch("#sec04",{
    onToggle:(batch) => {
        $('body').toggleClass("js-bg04");
        $('.gnav-item').eq(3).toggleClass("js-current");
    },
    trigger: '#sec04',
    start: "top center",
    end: "bottom center",
    toggleActions: 'play none play reset',
});

