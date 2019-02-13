function Paginat(object) {

  this.totalNum = object.dataTotal || 10;

  this.pageSize = Number(object.pageAmount) || 20;

  this.pageNum = Math.ceil(object.dataTotal / object.pageAmount);

  this.selectSize = object.pageAmountList || [10, 20];

  this.pagerCount = object.pageSize || 7;

  // console.log(object)
  this.curPage = object.curPage || 1;

  this.target = document.getElementById(object.target);

  this.pageTotal = Math.ceil(this.totalNum / this.pageSize)

  this.html = '';

  this.getPage = object.getPage

  this.getPageAmount = object.getPageAmount

  this.PagingSizeSelect;

  this.PagingNow;

  this.PagingSizeSelectUl;

  this.PagingSizeSelectUlList;

  this.PagingSize;
  // 分页下标数组
  this.pageList;
  this.init();
}

// 初始化方法
Paginat.prototype.init = function () {
  var This = this;
  this.html = "<div class= 'PagingTotalNum PagingDevice '>共" + this.totalNum + "条</div><div class='PagingDevice'><div id='PagingSizeSelect' class='PagingSizeSelect'><div id='PagingSizeSelectImg' class='PagingSizeSelectImg'><i id='iconfont' class='iconfont icon-xiajiantou'></i></div>";
  this.html += "<ul id='PagingSizeSelectUl'>"
  this.selectSize.map(function (res) {
    if (res == This.pageSize) {
      This.html += "<li data-num=" + res + " style='color:#409eff;background:#f5f7fa;'>" + res +
        "条/页</li>"
    } else {
      This.html += "<li data-num=" + res + ">" + res + "条/页</li>"
    }
  })
  this.html += "<div class='ulTriangle'><div/>  </ul>";
  this.html += "<div class='PagingDevice' id='PagingSize'>" + this.pageSize + "</div>条/页</div></div>";
  this.html +=
    "<div class='PagingDevice' ><span  class='PagingPrev' data-pagingId='" + (((Number(this.curPage) - 1) > 0 ? (
      Number(
        this.curPage) - 1) : 1)) +
    "'><i class='iconfont icon-zuojiantou'></i></span></div><div class='PagingDevice' id='PagingNum'><div class='PagingDevice' id='my_pageList'></div>";
  this.html += "</div><div class='PagingDevice'><span data-pagingId='" + (((Number(this.curPage) + 1) <
      this.pageNum ?
      (Number(this.curPage) + 1) : this.pageNum)) +
    "' class='PagingNext'><i id='iconfont' class='iconfont icon-youjiantou'></i></span></div>";
  this.html += "<div class='PagingDevice'>前往<input id='PagingNow' value=" + this.curPage + ">页<div/>";
  this.target.innerHTML = this.html;
  this.PagingNow = this.target.querySelector('#PagingNow');
  this.PagingSizeSelect = this.target.querySelector('#PagingSizeSelect');
  this.PagingSizeSelectUl = this.target.querySelector('#PagingSizeSelectUl');
  this.PagingSizeSelectUlList = Array.prototype.slice.call(this.PagingSizeSelectUl.getElementsByTagName('li'));
  this.PagingSize = this.target.querySelector('#PagingSize');
  this.PagingSizeSelectUlList.map(function (res) {
    res.onclick = function (ev) {
      This.SizeSelectListClick(ev, this);
    }
    res.onmouseover = function () {
      This.SizeSelectListOver(this);
    }
    res.onmouseout = function () {
      This.SizeSelectListOut(this);
    }
  })
  this.showPage();
  this.PagingNow.onfocus = function () {
    This.focus()
  }
  this.PagingNow.onblur = function () {
    This.blur()
  }
  this.PagingSizeSelect.onclick = function (ev) {
    This.SizeSelectClick(ev)
  }
  this.PagingSizeSelect.onmousemove = function (ev) {
    This.SizeSelectOver(this)
  }
  this.PagingSizeSelect.onmouseout = function () {
    This.SizeSelectOut(this)
  }
  document.documentElement.onclick = function () {
    This.doucmentClick()
  }

  document.body.onclick = function () {
    This.doucmentClick()
  }

  this.target.getElementsByClassName('PagingNext')[0].onclick = function () {
    This.PageClick(this, this.getAttribute('data-pagingid'));
  }
  this.target.getElementsByClassName('PagingPrev')[0].onclick = function () {
    This.PageClick(this, this.getAttribute('data-pagingid'));
  }
  this.target.getElementsByClassName('PagingPrev')[0].onmouseover = function () {
    This.PagingOver(this);
  }
  this.target.getElementsByClassName('PagingPrev')[0].onmouseout = function () {
    This.PagingOut(this);
  }
  this.target.getElementsByClassName('PagingNext')[0].onmouseover = function () {
    This.PagingOver(this);
  }
  this.target.getElementsByClassName('PagingNext')[0].onmouseout = function () {
    This.PagingOut(this);
  }
}

// document 点击事件
Paginat.prototype.doucmentClick = function () {
  this.PagingSizeSelectUl.style.display = 'none'
}

// 下拉框列表点击事件
Paginat.prototype.SizeSelectListClick = function (ev, This) {
  ev.stopPropagation()
  this.PagingSizeSelectUlList.map(function (res) {
    res.style.color = '#606266'
  })
  This.style.color = 'rgb(64, 158, 255)';
  this.PagingSize.innerHTML = This.getAttribute('data-num');
  this.PagingSizeSelectUl.style.display = 'none'
  this.getPageAmount(This.getAttribute('data-num'))
}

// 下拉框列表移入事件
Paginat.prototype.SizeSelectListOver = function (This) {
  This.style.background = '#f5f7fa'
}
// 下拉框列表移除事件
Paginat.prototype.SizeSelectListOut = function (This) {
  This.style.background = 'white'
}

// 下拉框点击事件
Paginat.prototype.SizeSelectClick = function (ev) {
  ev.stopPropagation()
  this.PagingSizeSelectUl.style.display = 'block'
}

// 下拉框移入事件
Paginat.prototype.SizeSelectOver = function (This) {
  This.style.transition = '.1s'
  This.style.borderColor = 'rgb(64, 158, 255)'
}
// 下拉框移除事件
Paginat.prototype.SizeSelectOut = function (This) {
  This.style.borderColor = 'black'
}


// 页码输入框 聚焦事件
Paginat.prototype.focus = function () {
  var This = this;
  document.onkeydown = function (event) {
    if (event.keyCode == 13) {
      This.PagingNow.blur();
    }
  }
}

// 页码输入框 失焦事件
Paginat.prototype.blur = function () {
  document.onkeydown = false;
  this.curPage = this.PagingNow.value <= this.pageTotal ? this.PagingNow.value > 0 ? this.PagingNow.value : 1 : this.pageTotal;
  this.PagingNow.value = this.curPage;
  this.showPage();
}


//分页页码渲染方法
Paginat.prototype.showPage = function () {
  var This = this;
  var PageListHtml = ''
  if (this.curPage <= this.pagerCount && this.pageNum <= this.pagerCount) {
    for (var i = 1; i <= this.pageNum; i++) {
      if (i <= this.pagerCount - 1) {
        PageListHtml += "<span data-pagingId = '" + i + "'>" + i + "</span>";
      }
      if (i == this.pagerCount) {
        if (this.pageNum == this.pagerCount) {
          PageListHtml += "<span data-pagingId = '" + this.pageNum + "'>" + this.pageNum + "</span>";
        } else {
          PageListHtml += "<span data-pagingId='" + ((Number(this.curPage) + (this.pagerCount - 2)) < this.pageNum ? (Number(
              this.curPage) +
            (this.pagerCount - 2)) : this.pageNum) + "'><i id='PagingIconRightMore'   class='iconfont icon-more'></i></span>";
          PageListHtml += "<span data-pagingId = '" + this.pageNum + "'>" + this.pageNum + "</span>";
        }
      }
    }
  } else if (this.curPage < (this.pagerCount - 2) && this.pageNum > this.pagerCount) {
    for (var i = 1; i < this.pagerCount; i++) {
      PageListHtml += "<span data-pagingId = '" + i + "'>" + i + "</span>";
    }
    PageListHtml +=
      "<span data-pagingId='" + ((Number(this.curPage) + (this.pagerCount - 2)) < this.pageNum ? (Number(
        this.curPage) + (this.pagerCount - 2)) : this.pageNum) +
      "'><i id='PagingIconRightMore'  class='iconfont icon-more'></i></span>"
    PageListHtml += "<span data-pagingId = '" + this.pageNum + "'>" + this.pageNum +
      "</span>";
  } else if (this.curPage >= (this.pagerCount - 2) && this.pageNum > this.pagerCount && this.curPage < (this.pageNum - ((this.pagerCount - 1) / 2))) {
    PageListHtml += "<span data-pagingId = '" + 1 + "'>" + 1 + "</span>";
    PageListHtml +=
      "<span data-pagingId='" + ((Number(this.curPage) - (this.pagerCount - 2)) >= 1 ? (Number(this.curPage) - (this.pagerCount - 2)) : 1) +
      "'><i id='PagingLeftIconMore'  class='iconfont icon-more'></i></span>"
    for (var i = 0; i < (this.pagerCount - 2); i++) {
      PageListHtml += "<span data-pagingId = '" + (Number(this.curPage) - (Math.floor(((this.pagerCount - 2) / 2) - i))) + "'>" + (Number(this.curPage) - (Math.floor(((this.pagerCount - 2) / 2) - i))) + "</span>";
    }
    PageListHtml +=
      "<span data-pagingId='" + ((Number(this.curPage) + (this.pagerCount - 2)) < this.pageNum ? ((Number(this.curPage) + (this.pagerCount - 2))) : this.pageNum) +
      "'><i id='PagingIconRightMore'  class='iconfont icon-more'></i></span>"
    PageListHtml += "<span data-pagingId = '" + this.pageNum + "'>" + this.pageNum +
      "</span>";
  } else {
    PageListHtml += "<span data-pagingId = '" + 1 + "'>" + 1 + "</span>";
    PageListHtml +=
      "<span data-pagingId='" + ((Number(this.curPage) - (this.pagerCount - 2)) >= 1 ? (Number(this.curPage) - (this.pagerCount - 2)) : 1) +
      "'><i id='PagingLeftIconMore'  class='iconfont icon-more'></i></span>"
    for (var i = (this.pagerCount - 2); i >= 0; i--) {
      PageListHtml += "<span data-pagingId = '" + (this.pageNum - i) + "'>" + (this.pageNum - i) + "</span>";
    }
  }
  this.target.querySelector('#my_pageList').innerHTML = PageListHtml
  this.pageList = Array.prototype.slice.call(this.target.querySelector('#my_pageList').getElementsByTagName('span'))
  // console.log(document.querySelector('#PagingDevice').getAttribute('background'))
  this.pageList.map(function (object, index) {
    object.innerHTML == This.curPage ? object.style.color = 'rgb(64, 158, 255)' : ''
    object.onclick = function () {
      This.PageClick(this, this.getAttribute('data-pagingid'));
    }
    object.onmouseover = function () {
      This.PageMouseOver(this);
    }
    object.onmouseout = function () {
      This.PageMouseOut(this, index);
    }
  })
}

//页码点击事件
Paginat.prototype.PageClick = function (This, index) {
  if (this.curPage == index) {
    return;
  }
  this.curPage = index;
  this.showPage();
  this.getPage(index)
  this.PagingNow.value = index;
}

//页码移入事件
Paginat.prototype.PageMouseOver = function (This) {
  This.style.color = 'rgb(64, 158, 255)';
  !isNaN(This.innerHTML) ? Number(This.getAttribute('data-pagingid')) == Number(this.curPage) ? This.style.cursor = 'not-allowed' : '' : Number(This.getAttribute('data-pagingid')) > Number(this.curPage) ? (This.firstChild.classList.remove('icon-more') || This.firstChild.classList.add('icon-shuangyoujiantou-')) : (This.firstChild.classList.remove('icon-more') || This.firstChild.classList.add('icon-shuangzuojiantou-'))

}
//页码移出事件
Paginat.prototype.PageMouseOut = function (This, index) {
  This.innerHTML == this.curPage ? This.style.color = 'rgb(64, 158, 255)' : This.style.color = 'black';
  !isNaN(This.innerHTML) ? Number(This.getAttribute('data-pagingid')) == Number(this.curPage) ? This.style.cursor = 'pointer' : '' : Number(This.getAttribute('data-pagingid')) > Number(this.curPage) ? (This.firstChild.classList.remove('icon-shuangyoujiantou-') || This.firstChild.classList.add('icon-more')) : (This.firstChild.classList.remove('icon-shuangzuojiantou-') || This.firstChild.classList.add('icon-more'))
}
Paginat.prototype.PagingOver = function (This) {
  This.style.color = 'rgb(64, 158, 255)';
  This.getAttribute('data-pagingid') == this.curPage ? This.style.cursor = 'not-allowed' : ''
}

Paginat.prototype.PagingOut = function (This, index) {
  This.style.color = 'black';
  This.style.cursor = 'pointer'
}