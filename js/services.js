angular.module('starter.services', [])

  .factory("courseLists",function(){
    var chats = [
      [{ "id":0, "title":"爆翻内地“娱乐圈”", "main":"上海丨25套必住民宿","imgsrc":'img/IMG_0605_04.png'},
        { "id":1, "title":"爆翻内地“娱乐圈”", "main":"上海丨25套必住民宿","imgsrc":'img/123456_03.png'}],
      [{ "id":2, "title":"爆翻内地“娱乐圈”", "main":"上海丨25套必住民宿","imgsrc":'img/123456_07.png'},
        { "id":3, "title":"爆翻内地“娱乐圈”", "main":"上海丨25套必住民宿","imgsrc":'img/123456_09.png'}]
    ];
    return{
      all:function(){
        return chats;
      }
    };
  })
  .factory("courseFirst",function() {
    var itemFir = [{
      id: 0,
      name: '￥厦门环岛路 增姐庵2号',
      lastText: '厦门丨',
      imgsrc: 'img/4444.png'
    },{
      id: 1,
      name: '￥厦门环岛路 增姐庵2号',
      lastText: '厦门丨',
      imgsrc: 'img/4444.png'
    },{
      id: 2,
      name: '￥厦门环岛路 增姐庵2号',
      lastText: '厦门丨',
      imgsrc: 'img/4444.png'
    },{
      id: 3,
      name: '￥厦门环岛路 增姐庵2号',
      lastText: '厦门丨',
      imgsrc: 'img/4444.png'
    }];


    return {
      all:function(){
        return itemFir;
      }
    };
  })
  //轮播图
  .factory("lunbcsa",function() {
    var lunb = [
      [{  id: 0,
        name: '￥厦门环岛路 增姐庵2号',
        lastText: '厦门丨',
        imgsrc: 'img/14-1506291A242927.jpg'
      }],
        [{  id: 1,
          name: '￥厦门环岛路 增姐庵2号',
          lastText: '厦门丨',
          imgsrc: 'img/54bcc5a17a4f9e73a60254ff6c4c113a.jpg'}],
      [{  id: 2,
        name: '￥厦门环岛路 增姐庵2号',
        lastText: '厦门丨',
        imgsrc: 'img/f23m4z22tnz.jpg'}
       ]
    ];
    return {
      all:function(){
        return lunb;
      }
    };
  })
  //轮播图2
  .factory("Secondlun",function() {
    var seconDs = [
      [{  id: 0,
        name: '￥厦门环岛路 增姐庵2号',
        lastText: '厦门丨',
        imgsrc: 'img/1213_02.png'
      }],
      [{  id: 1,
        name: '￥厦门环岛路 增姐庵2号',
        lastText: '厦门丨',
        imgsrc: 'img/IMG_0609_02.png'}],
      [{  id: 2,
        name: '￥厦门环岛路 增姐庵2号',
        lastText: '厦门丨',
        imgsrc: 'img/IMG_0615_02.png'}
      ]
    ];
    return {
      all:function(){
        return seconDs;
      }
    };
  })
//特色体验
  .factory("Advantages",function() {
    var characteristic = [
      [{  id: 0,
        name: '番茄庄园',
        lastText: '上海',
        Advantage:'地道上海小吃，品尝香滋味',
        imgsrc: 'img/images/IMG_0612_03.png'
      }],
      [{  id: 1,
        name: '柚尼',
        lastText: '泉州丨外贸业务',
        Advantage:'自制健康口红，玩转魅力色彩',
        imgsrc: 'img/IMG_0612_034_03.png'}],
      [{  id: 2,
        name: '詹瑶_武夷山',
        lastText: '武夷山',
        Advantage:'懂得了茶的味道，就懂得了人生的味道',
        imgsrc: 'img/IMG_0617_03.png'}
      ]
    ];
    return {
      all:function(){
        return characteristic;
      }
    };
  })
  //列表逛不完的艺术范
  .factory("Artistic",function(){
    var artist = [
      {
        "id":0,
        "pic":"img/shouye_02.png",
        "title":"￥365 厦门环岛路 增姐庵2号",
        "main":"厦门" ,
        "imgsrc":"img/IMG_0607_03.png"
      },
      {
        "id":1,
        "pic":"img/shouye_02.png",
        "title":"￥200 宽窄巷子",
        "main":"厦门" ,
        "imgsrc":"img/IMG_0608_03.png"
      },
      {
        "id":2,
        "pic":"img/shouye_02.png",
        "title":"￥150 锦里、人民",
        "main":"上海" ,
        "imgsrc":"img/IMG_0608_07.png"
      },
      {
        "id":3,
        "pic":"img/shouye_02.png",
        "title":"￥100 大牌坊",
        "main":"香港" ,
        "imgsrc":"img/IMG_0617_03.png"
      }
    ];
    return{
      all:function(){
        return artist;
      }
    };
  })

/*
/*

  .factory("HomeGoodlistRow",function(){
    var homeGoodlistRows = [
      [{ "id":0, "title":"javaScript课程", "main":"good,good,非常棒！","imgsrc":"shouye_02.png"},
        {"id":1, "title":"UI/UE","main":"UI,非常棒！","imgsrc":"shouye_02.png"}],
      [{ "id":2, "title":"HTML5+CSS3","main":"bangbangda,非常棒！","imgsrc":"shouye_02.png"
      },
        { "id":3, "title":"jQuery","main":"wuli jQuery,非常棒！","imgsrc":"shouye_02.png"
        }]
    ];
    return{
      all:function(){
        return homeGoodlistRows;
      }
    };
  })





  .factory('courseSecond',function() {
    var itemSec=[{
      id: 0,
      imgsrc:"img/ben.png",
      title: "2标题1",
      num: "2节",
      nums: "15节"
    },
      /!*省略部分内容*!/
      {
        id: 5,
        imgsrc:"img/ben.png",
        title: "标题6",
        num: "3节",
        nums: "15节"
      }];


    return {
      all:function(){
        return itemSec;
      }
    };
  })


  //学习页面目录数据
  .factory('studyList',function() {
    var studymulu = [{
      title:"1-1photoshop修图",
      time:"15分钟"
    },
      {
        title:"1-2photoshop修",
        time:"15分钟"
      },
      {
        title:"1-2photoshop修",
        time:"15分钟"
      },
      {
        title:"1-2photoshop修",
        time:"15分钟"
      },
      {
        title:"1-2photoshop",
        time:"15分钟"
      } ,
      {
        title:"1-2photoshop",
        time:"15分钟"
      }]

    return{
      all:function(){
        return studymulu;
      }
    }
  })
//评价的 假数据
  .factory('pingjiaList',function() {

    var assesslist = [{
      pic: "img/study_tx.jpg",
      name: "李晓丽",
      title: "10分钟前",
      cont: "多谢大神指点",
    },
      {
        pic: "img/study_tx.jpg",
        name: "李晓丽",
        title: "10分钟前",
        cont: "多谢大神指点",
      },
      {
        pic:"img/study_tx.jpg",
        name: "李晓丽",
        title: "8分钟前",
        cont: "多谢大神指点",
      },
      {
        pic: "img/study_tx.jpg",
        name: "李晓丽",
        title: "刚刚",
        cont: "多谢大神指点",
      }];

    return{
      all:function(){
        return assesslist
      }
    }

  })
;
*/
//短租列表
  .factory('courseCBA',function() {
    var course = [{
      id: 0,
      titleEn: '厦门环岛路',
      price: '356',
      imgsrc: 'img/IMG_0617_03.png'
    },{
      id: 1,
      titleEn: '詹瑶_武夷山',
      price: '0',
      imgsrc: 'img/14-1506291A242927.jpg'
    },{
      id: 2,
      titleEn: '3Ben Sparrow',
      price: '100',
      imgsrc: 'img/IMG_0607_03.png'
    },{
      id: 3,
      titleEn: '詹瑶_武夷山',
      price: '150',
      imgsrc: 'img/IMG_0617_03.png'
    },{
      id: 4,
      titleEn: '厦门环岛路c',
      price: '356',
      imgsrc: 'img/IMG_0607_03.png'
    },{
      id:5,
      titleEn: '锦里、人民',
      price: '0',
      imgsrc: 'img/14-1506291A242927.jpg'
    },{
      id: 6,
      titleEn: '詹瑶_武夷c',
      price: '0',
      imgsrc: 'img/IMG_0617_03.png'
    },{
      id: 7,
      titleEn: '厦门环岛路c',
      price: '356',
      imgsrc: 'img/IMG_0607_03.png'
    },{
      id: 8,
      titleEn: '厦门环岛路c',
      price: '150',
      imgsrc: 'img/IMG_0617_03.png'
    },{
      id: 9,
      titleEn: '宽窄子',
      price: '200',
      imgsrc: 'img/IMG_0607_03.png'
    },{
      id: 10,
      titleEn: '宽窄巷',
      price: '200',
      imgsrc: 'img/IMG_0607_03.png'
    },{
      id: 11,
      titleEn: '锦人民',
      price: '0',
      imgsrc: 'img/IMG_0617_03.png'
    },{
      id: 12,
      titleEn: '锦里、人',
      price: '356',
      imgsrc: 'img/IMG_0607_03.png'
    },{
      id: 13,
      titleEn: '厦门环',
      price: '356',
      imgsrc: 'img/IMG_0607_03.png'
    },{
      id: 14,
      titleEn: '厦门',
      price: '356',
      imgsrc: 'img/IMG_0617_03.png'
    },{
      id: 15,
      titleEn: '窄巷子',
      price: '0',
      imgsrc: 'img/14-1506291A242927.jpg'
    }];

    return {
      all:function(){
        return course;
      },page:function(nowpage){//传参数
        //截取五个显示数据
        return course.slice((nowpage-1)*5,nowpage*5);
        //获取id数据
      },courseSearch:function(searchId){//接收id
        return course.slice(0,3);
        //获取价格数据
      },priceJie:function(price){//接收id和价格
        return course.slice(2,4);
      }
    };
  })
  //纯字母点击
  .factory('Letters',function() {
    var letter = [{
      id: 0,
      lettes: 'A',
    },{
      id: 1,
      lettes: 'B'

    },{
      id: 2,
      lettes: 'C'
    },{
      id: 3,
      lettes: 'D'
    },{
      id: 4,
      lettes: 'E'
    },{
      id: 5,
      lettes: 'F'
    },{
      id: 6,
      lettes: 'G'
    }
      ,{
        id: 7,
        lettes: 'H'
      }
      ,{
        id: 8,
        lettes: 'J'
      }
      ,{
        id: 9,
        lettes: 'K'
      }
      ,{
        id: 10,
        lettes: 'L'
      }
      ,{
        id: 11,
        lettes: 'M'
      }
      ,{
        id: 12,
        lettes: 'N'
      }
      ,{
        id: 13,
        lettes: 'P'
      },{
        id: 14,
        lettes: 'Q'
      }
      ,{
        id: 15,
        lettes: 'R'
      }
      ,{
        id: 16,
        lettes: 'S'
      }
      ,{
        id: 17,
        lettes: 'T'
      }
      ,{
        id: 18,
        lettes: 'W'
      }
      ,{
        id: 19,
        lettes: 'X'
      }
      ,{
        id: 20,
        lettes: 'Y'
      }
      ,{
        id: 21,
        lettes: 'Z'
      }
    ]
    return{
      all:function(){
        return letter;
      }
    }
  })
  .factory('Cripy',function() {
    var criy = [{
      id: 0,
      titleEn: '上海大前门',
      price: '100',
      imgsrc: 'img/14-1506291A242927.jpg'
    },{
      id: 15,
      titleEn: '詹瑶_武夷山c',
      price: '200',
      imgsrc: 'img/IMG_0607_03.png'

    },{
      id: 15,
      titleEn: '3Ben Sparrow',
      price: '0',
      imgsrc: 'img/IMG_0607_03.png'
    },{
      id: 15,
      titleEn: '詹瑶_武夷山',
      price: '0',
      imgsrc: 'img/IMG_0617_03.png'
    },{
      id: 15,
      titleEn: '厦门环岛路',
      price: '356',
      imgsrc: 'img/IMG_0617_03.png'
    },{
      id: 15,
      titleEn: '锦里、人民',
      price: '0',
      imgsrc: 'img/14-1506291A242927.jpg'
    },{
      id: 15,
      titleEn: '詹瑶_武夷山a',
      price: '321',
      imgsrc: 'img/IMG_0617_03.png'
    }]
    return{
      all:function(){
        return criy;
      }
    }
  })
  //城市字母
  .factory('Citys',function() {
    var city = [{zu:'A',code:
      [{
        id: 0,
        cityc: '阿勒泰',
        price: '100',
        imgsrc: 'img/14-1506291A242927.jpg'
      }, {
      id: 0,
      cityc: '安庆',
      price: '200',
      imgsrc: 'img/IMG_0607_03.png'

    }, {
      id: 0,
      cityc: '安阳',
      price: '0'
    }, {
      id: 0,
      cityc: '阿克苏',
      price: '0'
    }, {
      id: 0,
      cityc: '安溪',
      price: '356'
    }, {
      id: 0,
      cityc: '阿荣旗',
      price: '0'
    }, {
      id: 0,
      cityc: '阿尔山',
      price: '321'
    }
      , {
        id: 0,
        cityc: '安塞',
        price: '321'
      }
      , {
        id: 0,
        cityc: '阿合奇',
        price: '321'
      }
      , {
        id: 0,
        cityc: '阿合奇',
        price: '321'
      }
      , {
        id: 0,
        cityc: '阿拉尔',
        price: '321'
      }
      , {
        id: 0,
        cityc: '阿图什',
        price: '321'
      }]},{zu:'B',code:  [{
      id: 1,
      cityc: '北京',
      price: '100'
    },{
      id: 1,
      cityc: '亳州',
      price: '200'
    },{
      id: 1,
      cityc: '蚌埠',
      price: '0'
    },{
      id: 1,
      cityc: '百色 ',
      price: '0'
    },{
      id: 1,
      cityc: '北海',
      price: '356'
    },{
      id: 1,
      cityc: '北流',
      price: '0'
    },{
      id: 1,
      cityc: '博白',
      price: '321'
    }
      ,{
        id: 1,
        cityc: '宾阳',
        price: '321'
      }
      ,{
        id: 1,
        cityc: '巴马',
        price: '321'
      }
      ,{
        id: 1,
        cityc: '保定 ',
        price: '321'
      }
      ,{
        id: 1,
        cityc: '柏乡',
        price: '321'
      }
      ,{
        id: 1,
        cityc: '北戴河',
        price: '321'
      }
      ,{
        id: 1,
        cityc: '霸州',
        price: '321'
      }
      ,{
        id: 1,
        cityc: '博野',
        price: '321'
      }
      ,{
        id: 1,
        cityc: '泊头',
        price: '321'
      }]

    },
      {zu:'C',code:  [{
        id: 2,
        cityc: '池州',
        price: '100'
      },{
        id: 2,
        cityc: '巢湖',
        price: '200'
      },{
        id: 2,
        cityc: '长丰',
        price: '0'
      },{
        id: 2,
        cityc: '滁州 ',
        price: '0'
      },{
        id: 2,
        cityc: '潮州',
        price: '356'
      },{
        id: 2,
        cityc: '潮阳',
        price: '0'
      },{
        id: 2,
        cityc: '澄海',
        price: '321'
      }
        ,{
          id: 2,
          cityc: '赤坎',
          price: '321'
        }
        ,{
          id: 2,
          cityc: '潮安',
          price: '321'
        }
        ,{
          id: 2,
          cityc: '从化 ',
          price: '321'
        }
        ,{
          id: 2,
          cityc: '册亨',
          price: '321'
        }
        ,{
          id: 2,
          cityc: '赤水',
          price: '321'
        }
        ,{
          id: 2,
          cityc: '从江',
          price: '321'
        }
        ,{
          id: 2,
          cityc: '长顺',
          price: '321'
        }
        ,{
          id: 2,
          cityc: '岑巩',
          price: '321'
        }]

      },
      {zu:'D',code:  [{
        id: 3,
        cityc: ' 大埔',
        price: '100'
      },{
        id: 3,
        cityc: '电白',
        price: '200'
      },{
        id: 3,
        cityc: '斗门',
        price: '0'
      },{
        id: 3,
        cityc: '德庆 ',
        price: '0'
      },{
        id: 3,
        cityc: '东源',
        price: '356'
      },{
        id: 3,
        cityc: '东莞',
        price: '0'
      },{
        id: 3,
        cityc: '大化',
        price: '321'
      }
        ,{
          id: 3,
          cityc: '德保',
          price: '321'
        }
        ,{
          id: 3,
          cityc: '大新',
          price: '321'
        }
        ,{
          id: 3,
          cityc: '东兰 ',
          price: '321'
        }
        ,{
          id: 3,
          cityc: '都安',
          price: '321'
        }
        ,{
          id: 3,
          cityc: '东兴',
          price: '321'
        }
        ,{
          id: 3,
          cityc: '德江',
          price: '321'
        }
        ,{
          id: 3,
          cityc: '道真',
          price: '321'
        }
        ,{
          id: 3,
          cityc: '丹寨',
          price: '321'
        }]

      }

    ]
    return{
      all:function(){
        return city;
      }
    }
  })
    //玩法内藏轮播介绍
  .factory('Tibet',function() {
    var tibetscang =[
      {id:0,
        data:[
      {
        id: 0,
        titleEn: '上海大前门',
        price: '100',
        imgsrc: 'img/timgd.png'
      },{
      id: 1,
      titleEn: '上海大前门',
      price: '100',
      imgsrc: 'img/timg2.png'
    },{
      id: 2,
      titleEn: '詹瑶_武夷山c',
      price: '200',
      imgsrc: 'img/timg1.png'

    },{
      id: 3,
      titleEn: '3Ben Sparrow',
      price: '0',
      imgsrc: 'img/timg.png'
    }
      ,{
        id: 4,
        titleEn: '3Ben Sparrow',
        price: '0',
        imgsrc: 'img/timgh.png'
      }]
  },
    {id:1,
      data:[
        {
          id: 0,
          titleEn: '上海大前门',
          price: '100',
          imgsrc: 'img/timgc.png'
        },{
        id: 1,
        titleEn: '上海大前门',
        price: '100',
        imgsrc: 'img/timgcv.png  '
      },{
        id: 2,
        titleEn: '詹瑶_武夷山c',
        price: '200',
        imgsrc: 'img/timgwc.png'

      }]
    }

    ];
    return{
      all:function(){
        return tibetscang;
      },get:function(myId){
        for(var i=0;i<tibetscang.length;i++){
          if(tibetscang[i].id===parseInt(myId)){
            return tibetscang[i]
          }
        }
        return null;
      }
    }
  })
  .factory('Tibetc',function() {
    var tibetscangc = [
      {
        id: 0,
        titleEn: '上海大前门',
        price: '100',
        imgsrc: 'img/timgc.png'
      },{
        id: 1,
        titleEn: '上海大前门',
        price: '100',
        imgsrc: 'img/timgcv.png  '
      },{
        id: 2,
        titleEn: '詹瑶_武夷山c',
        price: '200',
        imgsrc: 'img/timgwc.png'

      }]
    return{
      all:function(){
        return tibetscangc;
      }
    }
  })

//我的个人中心小图标
  .factory('Myimages',function() {
    var myimg=
    [
      { "id":0, "title":"优惠券", "main":"上海丨25套必住民宿","imgsrc":'img/img2/icon_mine__coupon.png'},
        { "id":0, "title":"邀好友赚现金", "main":"上海丨25套必住民宿","imgsrc":'img/img2/icon_mine_gift.png'},
      { "id":0, "title":"收藏浏览", "main":"上海丨25套必住民宿","imgsrc":'img/img2/icon_mine_collect.png'},
        { "id":0, "title":"找房需求", "main":"上海丨25套必住民宿","imgsrc":'img/img2/icon_mine__find_room.png'},
      { "id":0, "title":"授权免押金", "main":"上海丨25套必住民宿","imgsrc":'img/img2/icon_mine__free_deposit.png'},
      { "id":0, "title":"联系客服", "main":"上海丨25套必住民宿","imgsrc":'img/img2/icon_mine_customer_service.png'},
      { "id":0, "title":"意见反馈", "main":"上海丨25套必住民宿","imgsrc":'img/img2/icon_mine_opinion.png'},
      { "id":0, "title":"帮助", "main":"上海丨25套必住民宿","imgsrc":'img/img2/icon_mine_help.png'},
      { "id":0, "title":"更多", "main":"上海丨25套必住民宿","imgsrc":'img/img2/icon_mine__more.png'}
    ];
    return{
      all:function(){
        return myimg;
      }
    }
  })
  //页面之间共享的数据方法，一个页面设置值，跳转页面，然后再另一个页面接收值
.factory('shareData',function($window){
    var allData={};//创建一个空对象
    return {
      //存储单个属性   设置值
      set:function(key,value){
        allData[key]=value;
      },
      //读取单个属性      接收的
      get:function(key,defaultValue){
        return allData[key] || defaultValue;
      }
    }
  })
  //调用浏览器的本地数据储存
  //localStorage//离线缓存
/* .factory('locals',['$window',function($window){
    return{
      //存储单个属性
      set :function(key,value){
        $window.localStorage[key]=value;
      },
      //读取单个属性
      get:function(key,defaultValue){
        return  $window.localStorage[key] || defaultValue;
      }
    }
  }])*/
  .factory('locals',['$window',function($window){
    return{
      //存储单个属性
      set :function(key,val){
        return $window.localStorage[key]=val;
      },
      //读取单个属性
      get:function(key){
        return  $window.localStorage[key]? true:false;
      }
    }
  }])


