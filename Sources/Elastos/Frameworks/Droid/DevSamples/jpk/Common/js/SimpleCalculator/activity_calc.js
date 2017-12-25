module.exports = function(aoElastos, aoActivity){

var CObject = aoElastos.CObject;

var CString = aoElastos.Core.CString;
var Droid_New = aoElastos.Droid.New;
var Core_New = aoElastos.Core.New;

var R = aoElastos.Application.R;

var oActivity = aoActivity.ActivityInstance;
var oHandler = aoActivity.ActivityHandler;

var IView__VISIBLE = 0x00000000;
var IView__INVISIBLE = 0x00000004;
var IView__GONE = 0x00000008;
var IView__NO_ID = -1;
var IMotionEvent__ACTION_DOWN = 0;
var IMotionEvent__ACTION_UP = 1;

var STC = require("/data/temp/node/Common/js/elastos_layout.js")(aoElastos, aoActivity);
var ST = new STC();

class Activity {
    constructor() {
        //
    }
    OnCreate(_this, savedInstanceState) {}
}

var Calculator = require("/data/temp/node/JSSimpleCalculator/Calculator.js")(aoElastos, aoActivity);

class activity_calc extends Activity {
    static get IS_ALREDY_RATED_FLAG() {
        return "is alredy rated";
    }

    static get _calc() {
        return activity_calc.__calc;
    }
    static set _calc(o) {
        activity_calc.__calc = o;
    }

    OnCreate(_this, savedInstanceState) {
        this._obj = _this;

        super.OnCreate(_this, savedInstanceState);

        ST.SetContentView(_this, R.layout.layout_calc);

        var textView = _this.FindViewById(R.id.textViewCurNum);
        if (!activity_calc._calc) {
            activity_calc._calc = new Calculator(textView, _this);
        }
        else {
            activity_calc._calc.BindView(textView);
        }

        var _calc = activity_calc._calc;
        _this.FindViewById(R.id.button0).SetOnClickListener(_calc);
        _this.FindViewById(R.id.button1).SetOnClickListener(_calc);
        _this.FindViewById(R.id.button2).SetOnClickListener(_calc);
        _this.FindViewById(R.id.button3).SetOnClickListener(_calc);
        _this.FindViewById(R.id.button4).SetOnClickListener(_calc);
        _this.FindViewById(R.id.button5).SetOnClickListener(_calc);
        _this.FindViewById(R.id.button6).SetOnClickListener(_calc);
        _this.FindViewById(R.id.button7).SetOnClickListener(_calc);
        _this.FindViewById(R.id.button8).SetOnClickListener(_calc);
        _this.FindViewById(R.id.button9).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonPoint).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonPlus).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonMinus).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonMul).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonDiv).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonAssign).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonPow).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonSqrt).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonDelete).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonClear).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonM).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonMplus).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonMminus).SetOnClickListener(_calc);
        _this.FindViewById(R.id.buttonPlusMinus).SetOnClickListener(_calc);

        return;
    }
}   //class activity_calc

class activity_ extends activity_calc {
    constructor(){
        super();
    }
    OnCreate(_this, savedInstanceState) {
        super.OnCreate(_this, savedInstanceState);
    }
    OnStart(_this){
        elog('====jso_activity_cb====OnStart.begin====');
    }
    OnResume(_this){
        elog('====jso_activity_cb====OnResume.begin====');
    }
    OnPause(_this){
        elog('====jso_activity_cb====OnPause.begin====');
    }
    OnStop(_this){
        elog('====jso_activity_cb====OnStop.begin====');
    }
    OnDestroy(_this){
        elog('====jso_activity_cb====OnDestroy.begin====');
    }
}   //class Calculator

return new activity_();

};  //module.exports