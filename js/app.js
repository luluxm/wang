// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

//http请求
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'], function($httpProvider) {

    //此方法用于修改$http请求的数据格式，让后台可以按照ajax，传输数据的方式接收
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function(obj) {
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

      for(name in obj) {
        value = obj[name];

        if(value instanceof Array) {
          for(i=0; i<value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value instanceof Object) {
          for(subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value !== undefined && value !== null)
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }

      return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
  })

  .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  /*用于修改安卓tab居下 （在参数里要加入$ionicConfigProvider）*/
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  /*用于修改安卓tab居下 --结束*/
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
      cache:'false',//清除缓存
    abstract: true,//表明这是一个模板，在每个页面中都可以显示
    templateUrl: 'templates/tabs.html'//实际的地址
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    cache:'false',//清除缓存
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
    //二级页面搜索
    .state('tab.tuijian', {//这是一个二级页面。必须从一级点击进入二级
      url: '/tuijian:myId',//自己命名的
      cache:'false',//清除缓存
      views: {
        'tab-home': {//用一级
          templateUrl: 'templates/tab-tuijian.html',//二级
          controller: 'TuijianCtrl'
        }
      }
    })
    //玩法展示
    .state('tab.lunbo', {//这是一个二级页面。必须从一级点击进入二级
      url: '/lunbo:myId',//自己命名的
      cache:'false',//清除缓存
      views: {
        'tab-home': {//用一级
          templateUrl: 'templates/tab-lunbo.html',//二级
          controller: 'LunboCtrl'
        }
      }
    })
    //玩法展示


  .state('tab.information', {
      url: '/information',
    cache:'false',//清除缓存
      views: {
        'tab-information': {
          templateUrl: 'templates/tab-information.html',
          controller: 'InformationCtrl'
        }
      }
    })
    .state('tab.Order', {
      url: '/Order',
      cache:'false',//清除缓存
      views: {
        'tab-Order': {
          templateUrl: 'templates/tab-Order.html',
          controller: 'OrderCtrl'
        }
      }
    })
    //点击课程列表跳转到study页面
    /*.state('tab.lesslistStudy', {//这是一个二级页面。必须从一级点击进入二级
      url: '/lesslistStudy:myId',//自己命名的  myId  键值
      cache:'false',//清除缓存
      views: {
        'tab-lessonlist': {//用一级
          templateUrl: 'templates/tab-information.html',//二级
          controller: 'Studyctrl'
        }
      }
    })*/
    //点击首页跳转到study页面
    //.state('tab.homestudy', {//这是一个二级页面。必须从一级点击进入二级
    //  url: '/homestudy:myId',//自己命名的
    //  cache:'false',//清除缓存
    //  views: {
    //    'tab-home': {//用一级
    //      templateUrl: 'templates/tab-information.html',//二级
    //      controller: 'Studyctrl'
    //    }
    //  }
    //})
    //注册页面
    //.state('tab.register', {//这是一个二级页面。必须从一级点击进入二级
    //  url: '/register',//自己命名的
    //  cache:'false',//清除缓存
    //  views: {
    //    'tab-personal': {//用一级
    //      templateUrl: 'templates/tab-register.html',//二级
    //      controller: 'RegisterCtrl'
    //    }
    //  }
    //})
    //登录成功页面
    //.state('tab.successc', {
    //  url: '/successc',
    //  cache:'false',//清除缓存
    //  views: {
    //    'tab-personal': {
    //      templateUrl: 'templates/tab-successc.html',
    //      controller: 'SuccessCtrl'
    //    }
    //  }
    //})
    //登录

    //登陆子页面
    .state('tab.pziye', {//这是一个二级页面。必须从一级点击进入二级
      url: '/pziye:myId',//自己命名的
      cache:'false',//清除缓存
      views: {
        'tab-personal': {//用一级
          templateUrl: 'templates/tab-pziye.html',//二级
          controller: 'PziyeCtrl'
        }
      }
    })
//首页轮播
    .state('tab.oneLub', {
      url: '/oneLub',
      cache:'false',//清除缓存
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-oneLub.html',
          controller: 'OneLubCtrl'
        }
      }
    })
  .state('tab.personal', {
    url: '/personal',
    cache:'false',//清除缓存
    views: {
      'tab-personal': {
        templateUrl: 'templates/tab-personal.html',
        controller: 'PersonalCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/oneLub');

});
