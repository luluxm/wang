angular.module('starter.controllers', [])
 .directive('hideTabs', function($rootScope) {
   return {
       restrict: 'A',
       link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
             scope.$watch(attributes.hideTabs, function(value){
                 $rootScope.hideTabs = 'tabs-item-hide';
               });
           });
        scope.$on('$ionicView.beforeLeave', function() {
             scope.$watch(attributes.hideTabs, function(value){
                  $rootScope.hideTabs = 'tabs-item-hide';
             });
            scope.$watch('$destroy',function(){
                $rootScope.hideTabs = false;
                })
            });
        }
    };
  })

.controller('HomeCtrl',function($scope,locals,shareData,courseLists,courseFirst,lunbcsa,Advantages,Secondlun,Artistic){
    $scope.chats=courseLists.all();
    $scope.itemFir=courseFirst.all();
    //轮播图
    $scope.lunb=lunbcsa.all();
    //轮播图2
    $scope.seconDs=Secondlun.all();
   /* //特色体验*/
    $scope.characteristic=Advantages.all();
    //逛不完的艺术范
    $scope.artist=Artistic.all();
    //滑动tach

    //玩法展示点击

    $scope.playZ=function(myId){
      window.location="#/tab/lunbo"+myId;
    }
//搜索框
    $scope.doSearch=function(){
        window.location="#/tab/tuijian";
    }

    //判断轮播是不是传了过来
    if(locals.get(locals)){
      window.location="#/tab/oneLub";
      //alert(1)
    }
  })
  .controller('InformationCtrl',function(){


  })
  .controller('OrderCtrl',function(){


  })
  .controller('PersonalCtrl',function($scope,Myimages){
$scope.myimg=Myimages.all()
    $scope.pryeDeng=function(){
      window.location='#/tab/pziye'
    }

  })
  //推荐
  .controller('TuijianCtrl',function($scope,courseCBA,$timeout,Cripy,Citys,Letters,shareData){
    $scope.course=courseCBA.all();
    //价格显示假数据
    $scope.criy=Cripy.all();
    //城市
    $scope.city=Citys.all();
    //字母
    $scope.letter=Letters.all();
    //点击传参数
    $scope.dfcF=function(){
    }
    //字母
    //价格数据 假数据
    $scope.priceBtns=[
      {id:'', btnName:"全部"},
      {id:'0', btnName:"免费"},
      {id:'1', btnName:"收费"}
    ];
    //课程列表设置单击事件
    $scope.mylist=true;
    $scope.hcolor={"color" : "#4ab77c"};
    $scope.togglec=function(){
      $scope.mylist=!$scope.mylist;
      if($scope.mylist==true){
        $scope.hcolor={"color" : "#4ab77c"};
        $scope.myprice=false;
        $scope.mycit=false;
        $scope.vcolor={"color" : "#333"};
        $scope.ccolor={"color" : "#333"};
      }else{
        $scope.hcolor={"color" : "#333"};
      }
    };
    //价格颜色切换设置单击事件
    $scope.myprice=false;
    $scope.vcolor={"color" : "#333"};
    $scope.mypriceto=function(){
      $scope.myprice=!$scope.myprice;
      if($scope.myprice==true){
        $scope.vcolor={"color" : "#4ab77c"};
        $scope.hcolor={"color" : "#333"};
        $scope.ccolor={"color" : "#333"};
        $scope.mylist=false;
        $scope.mycit=false;
      }else{
        $scope.vcolor={"color" : "#333"};
      }
    };
    $scope.mycit=false;
    $scope.ccolor={"color" : "#333"};
    $scope.mycity=function(){
      $scope.mycit=!$scope.mycit;
      if($scope.mycit==true){
        $scope.ccolor={"color" : "#4ab77c"};
        $scope.hcolor={"color" : "#333"};
        $scope.vcolor={"color" : "#333"};
        $scope.mylist=false;
        $scope.myprice=false;
      }else{
        $scope.ccolor={"color" : "#333"};
      }
    };

    // 假数据  的
  $scope.nowpage=1;//初始化
    $scope.mordata=true;
    $scope.course=courseCBA.page($scope.nowpage);//获取数据0-5
    //加载图片课程
    $scope.loadMore=function(){
      $scope.nowpage++;//
      $scope.newcourse=courseCBA.page($scope.nowpage);//获取数据6-10
      if($scope.newcourse==0){//如果当前数据为0，
        $scope.mordata=false;//不显示空白格
      }
      //将$scope.chats和$scope.newchats拼接在一起，为了不让上面的数据消失
      $scope.course=$scope.course.concat($scope.newcourse);
      $scope.$broadcast('scroll.infiniteScrollComplete');//下拉的效果
    };

    //设置一个函数，运用service工厂里面的courseJieshou  rturn 参数接收
    $scope.courseJieshou=function(searchId){//接收id
      $scope.course=courseLists.courseSearch(searchId);
      $scope.mylist=false;
    };
    //课程列表数据   假数据
     $scope.courseListBtns=[
     {id:0, btnName:"全部"},
     {id:1, btnName:"日租房"},
     {id:2, btnName:"短租房"},
     {id:3, btnName:"名胜古迹"},
     {id:4, btnName:"特色小吃"},
     {id:5, btnName:"其它"}
     ];
    //设置一个函数，运用service工厂里面的priceJie   rturn 参数接收
     $scope.priceJ=function(price){//接收id,价格
     $scope.course=courseCBA.priceJie(price);
     $scope.myprice=false;
     }
    //keyup搜索框的查询和按键事件
    $scope.myKeyup=function(ev,txt){
      $scope.keyCode=window.event ? ev.keyCode: ev.which;  //三维表达式
      //$scope.keyCode==0  手机enter键值
      $scope.course.concat($scope.newcourse);
      if($scope.keyCode==0 || $scope.keyCode==13){
       // $scope.priceSearch(txt,'','');//传参数传的是model 定义的
      for(var i=0;i<$scope.course.length;i++){
        if($scope.course[i].titleEn==txt){
          $scope.course.splice(0,15,$scope.course[i])
        }
      }
      }
    };
    //下拉刷新
    $scope.doRefresh = function() {
      $timeout(function () {
     //$scope.courseJieshou('', '全部', '');
        $scope.$broadcast('scroll.refreshComplete');
      }, 1000)
    }
  })
  //玩法展示
  .controller('LunboCtrl',function($scope,Tibet,$stateParams){
    //玩法展示
    $scope.tibetscang=Tibet.all();
    $scope.chahAo=function(){
      window.location='#/tab/home'
    }
    $scope.tibetscang=Tibet.get($stateParams.myId)
    console.log($scope.tibetscang);

  })
  //玩法展示
  .controller('wozouniCtrl',function($scope,Tibetc){
    //玩法展示
    $scope.tibetscangc=Tibetc.all();
    $scope.chahAoc=function(){
      window.location='#/tab/home'
    }

  })
  //登录personal子页面
  .controller('PziyeCtrl',function($scope){



  })
//首页轮播
  .controller('OneLubCtrl',function($scope,locals){

    if(locals.get("banner","yes"))
    {
      window.location.href="#/tab/home";
    }
    $scope.myzou=function()
    {
      locals.set("banner","yes");
      window.location.href="#/tab/home";
    }

  })

