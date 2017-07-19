module.exports = function(aoElastos, aoActivity){
    //common definition
    var CObject = aoElastos.CObject;

    var CString = aoElastos.Core.CString;
    var Droid_New = aoElastos.Droid.New;
    var Core_New = aoElastos.Core.New;

    var R = aoElastos.Application.R;

//================SetContentView Test====begin================

var STC = require("/data/temp/node/Common/js/elastos_layout.js")(aoElastos, aoActivity);
var ST = new STC();

//================SetContentView Test====begin================


    var oActivity = aoActivity.ActivityInstance;
    var oHandler = aoActivity.ActivityHandler;

    //--------private proproty begin--------

    var NAME;

    // instance state keys
    var KEY_CURRENT_STATE;
    var KEY_CURRENT_EXPRESSION;

    var mFormulaTextWatcher;
    var mFormulaOnKeyListener;
    var mFormulaEditableFactory;

    var mCurrentState;
    var mTokenizer;
    var mEvaluator;

    var mDisplayView;
    var mFormulaEditText;
    var mResultEditText;
    var mPadViewPager;
    var mDeleteButton;
    var mEqualButton;
    var mClearButton;

    var mCurrentButton;
    var mCurrentAnimator;

    //--------private proproty end--------

    //--------private method begin--------

    //--------private method end--------

    var IView__VISIBLE = 0x00000000;
    var IView__INVISIBLE = 0x00000004;
    var IView__GONE = 0x00000008;
    var IMotionEvent__ACTION_DOWN = 0;
    var IMotionEvent__ACTION_UP = 1;
    var IContext__LAYOUT_INFLATER_SERVICE = "layout_inflater";

    var CalculatorState = {
        INPUT : 0,
        EVALUATE : 1,
        RESULT : 2,
        ERROR : 3,
    }

    function _SetState(state) {
        elog("====Calculator::SetState====begin===="+this.mCurrentState+"===="+state);

        //var _this = this._obj;
        var _this = oActivity;

        if (mCurrentState != state) {
            mCurrentState = state;

            if (state == CalculatorState.RESULT || state == CalculatorState.ERROR) {
                mDeleteButton.SetVisibility(IView__GONE);
                mClearButton.SetVisibility(IView__VISIBLE);
            } else {
                mDeleteButton.SetVisibility(IView__VISIBLE);
                mClearButton.SetVisibility(IView__GONE);
            }

            if (state == CalculatorState.ERROR) {
                var errorColor = _this.GetResources().GetColor(R.color.calculator_error_color);
                mFormulaEditText.SetTextColor(errorColor);
                mResultEditText.SetTextColor(errorColor);
                _this.GetWindow().setStatusBarColor(errorColor);
            } else {
                mFormulaEditText.SetTextColor(
                        _this.GetResources().GetColor(R.color.display_formula_text_color));
                mResultEditText.SetTextColor(
                        _this.GetResources().GetColor(R.color.display_result_text_color));
                _this.GetWindow().SetStatusBarColor(
                        _this.GetResources().GetColor(R.color.calculator_accent_color));
            }
        }
        else {
            elog("====Calculator::SetState====no act====");
        }
        elog("====Calculator::SetState====end====");
    }


    return {
        OnCreate:function(aoContext, aoSavedInstanceState){
            elog('====jso_activity_cb====OnCreate.begin====');


            //----------------SetContentView begin----------------
            //oActivity.SetContentView(R.layout.activity_calculator);

            ST.SetContentView(aoContext, R.layout.activity_calculator);
            //----------------SetContentView end----------------

            elog('====jso_activity_cb====OnCreate.begin====tttt====');

//Elastos.CObject.showMethods(aoContext,"On");

//ss.tt();

    // mDisplayView = FindViewById(R::id::display);
    // mFormulaEditText = ICalculatorEditText::Probe(FindViewById(R::id::formula));
    // mResultEditText = ICalculatorEditText::Probe(FindViewById(R::id::result));
    // AutoPtr<IView> tmpView = FindViewById(R::id::pad_pager);
    // mPadViewPager = IViewPager::Probe(FindViewById(R::id::pad_pager));
    // mDeleteButton = FindViewById(R::id::del);
    // mClearButton = FindViewById(R::id::clr);
            mDisplayView = oActivity.FindViewById(R.id.display);
            mFormulaEditText = oActivity.FindViewById(R.id.formula);
            mResultEditText = oActivity.FindViewById(R.id.result);
            var tmpView = oActivity.FindViewById(R.id.pad_pager);
            mPadViewPager = oActivity.FindViewById(R.id.pad_pager);
            mDeleteButton = oActivity.FindViewById(R.id.del);
            mClearButton = oActivity.FindViewById(R.id.clr);

    // tmpView = FindViewById(R::id::pad_numeric);
    // tmpView->FindViewById(R::id::eq, (IView**)&mEqualButton);
    // Int32 visibility;
    // ;
    // if (mEqualButton == NULL || (mEqualButton->GetVisibility(&visibility), visibility != IView::VISIBLE)) {
    //     tmpView = NULL;
    //     tmpView = FindViewById(R::id::pad_operator);
    //     tmpView->FindViewById(R::id::eq, (IView**)&mEqualButton);
    // }
            tmpView = oActivity.FindViewById(R.id.pad_numeric);
            mEqualButton = tmpView.FindViewById(R.id.eq);
            if (!mEqualButton || (mEqualButton.GetVisibility() != IView__VISIBLE)) {
                tmpView = oActivity.FindViewById(R.id.pad_operator);
                mEqualButton = tmpView.FindViewById(R.id.eq);
            }

    // AutoPtr<CalculatorExpressionTokenizer> cet = new CalculatorExpressionTokenizer();
    // cet->constructor(IContext::Probe(this));
    // mTokenizer = cet.Get();
            // var cet = new CalculatorExpressionTokenizer();
            // cet.constructor(oActivity);
            // mTokenizer = cet.Get();

    // AutoPtr<CalculatorExpressionEvaluator> elr = new CalculatorExpressionEvaluator();
    // elr->constructor(cet.Get());
    // mEvaluator = elr.Get();
            // var elr = new CalculatorExpressionEvaluator();
            // elr.constructor(cet);
            // mEvaluator = elr.Get();

    // AutoPtr<IBundleHelper> bhl;
    // CBundleHelper::AcquireSingleton((IBundleHelper**)&bhl);
    // AutoPtr<IBundle> empty;
    // bhl->GetEMPTY((IBundle**)&empty);
    // savedInstanceState = savedInstanceState == NULL ? empty.Get() : savedInstanceState;
    // Int32 vol;
    // savedInstanceState->GetInt32(KEY_CURRENT_STATE, INPUT, &vol);
    // SetState(vol);
    // String str;
    // savedInstanceState->GetString(KEY_CURRENT_EXPRESSION, String(""), &str);
    // String text;
    // mTokenizer->GetLocalizedExpression(str, &text);
    // AutoPtr<ITextView> textView = ITextView::Probe(mFormulaEditText);
    // textView->SetText(StringUtils::ParseCharSequence(text));
    // AutoPtr<ICharSequence> cs;
    // textView->GetText((ICharSequence**)&cs);
    // mEvaluator->Evaluate(cs, this);

            var INPUT = 0;

            KEY_CURRENT_STATE = "Calculator_currentState";
            KEY_CURRENT_EXPRESSION = "Calculator_currentExpression";

            var empty = Droid_New("Elastos.Droid.Os.CBundleHelper").GetEMPTY();
            aoSavedInstanceState = aoSavedInstanceState == null ? empty : aoSavedInstanceState;
            var vol = aoSavedInstanceState.GetInt32(KEY_CURRENT_STATE, INPUT);

            _SetState(vol);

            //var str = aoSavedInstanceState.GetString(KEY_CURRENT_EXPRESSION, "");
            //var text = mTokenizer.GetLocalizedExpression(str);
            var textView = mFormulaEditText;
            //textView.SetText(StringUtils::ParseCharSequence(text));
            //textView.SetText(CString("先定个能达到的小目标，比方说我先挣它:"));
            //var cs = mFormulaEditText.GetText();
            //mEvaluator.Evaluate(cs, this);

return;
//-----------test begin---------

elog("=================test 0000 begin============");


var oModule = Elastos.Runtime.getModuleInfo("/data/temp/node/bin/Elastos.Droid.Calculator3.Helper.eco");

//Elastos.CObject.showMethods(oModule);

var aa = [];
var oClasses = oModule.GetAllClassInfos();
var oClass;
for(var i=0,im=oClasses.length;i<im;i++){
    var name = oClasses[i].GetName();
    aa.push(name);
    if (name == "CCalculator") {
        oClass = oClasses[i];
    }
}
elog("====CarClass:"+aa.join("=="));
Elastos.CObject.showMethods(oClass);

var bb = [
"Elastos.Droid.Support.V4.View.CViewPagerSavedState",   //0:ok
"Elastos.Droid.Support.V4.View.CViewPager", //1:ok
"Elastos.Droid.Calculator3.Helper.CNodeListener",   //2:ok
"Elastos.Droid.Calculator3.Helper.CCalculatorApplication",  //3:ok
"Elastos.Droid.Calculator3.Helper.CCalculator", //4:error
"Elastos.Droid.Calculator3.Helper.CCalculatorEditText", //5:ok
"Elastos.Droid.Calculator3.Helper.CCalculatorExpressionBuilder",    //6:ok
"Elastos.Droid.Calculator3.Helper.CCalculatorExpressionEvaluator",  //7:ok
"Elastos.Droid.Calculator3.Helper.CCalculatorExpressionTokenizer",  //8:ok
"Elastos.Droid.Calculator3.Helper.CCalculatorPadLayout",    //9 ok
"Elastos.Droid.Calculator3.Helper.CCalculatorPadViewPager", //10 ok
];

var oState = Elastos.Runtime.createObject(oModule,bb[4]);
Elastos.CObject.showMethods(oState);


//var oTokenizer = Elastos.Runtime.createObject(oModule,bb[8],aoContext);
//Elastos.CObject.showMethods(oTokenizer);
//var oEvaluator = Elastos.Runtime.createObject(oModule,bb[7],oTokenizer);
//Elastos.CObject.showMethods(oEvaluator);
//var oBuilder = Elastos.Runtime.createObject(oModule,bb[6],CString("test"),oTokenizer,true);
//Elastos.CObject.showMethods(oBuilder);

//var oPadLayout = Elastos.Runtime.createObject(oModule,bb[9],aoContext);
//Elastos.CObject.showMethods(oPadLayout);

//var oPadViewPager = Elastos.Runtime.createObject(oModule,bb[10],aoContext);
//Elastos.CObject.showMethods(oPadViewPager);

//var oViewPager = Elastos.Runtime.createObject(oModule,bb[1],aoContext);
//Elastos.CObject.showMethods(oViewPager);


//ssss;


elog("=================test 0000 end============");

//-----------test end---------

return;

    // textView->SetEditableFactory(mFormulaEditableFactory);
    // textView->AddTextChangedListener(mFormulaTextWatcher);
    // IView::Probe(mFormulaEditText)->SetOnKeyListener(mFormulaOnKeyListener);
    // AutoPtr<InnerListener> listener = new InnerListener(this);
    // mFormulaEditText->SetOnTextSizeChangeListener(listener);
    // //return mDeleteButton->SetOnLongClickListener(listener);
    // ec = mDeleteButton->SetOnLongClickListener(listener);

            mFormulaTextWatcher = new MyTextWatcher(this);
            mFormulaOnKeyListener = new MyOnKeyListener(this);
            mFormulaEditableFactory = new MyEditableFactory(this);

elog("====xxxxxxxx====1====");
            textView.SetEditableFactory(mFormulaEditableFactory);
elog("====xxxxxxxx====2====");
            textView.AddTextChangedListener(mFormulaTextWatcher);
elog("====xxxxxxxx====3====");
            mFormulaEditText.SetOnKeyListener(mFormulaOnKeyListener);
elog("====xxxxxxxx====4====");
            var listener = new InnerListener(oActivity);
elog("====xxxxxxxx====5====");
            mFormulaEditText.SetOnTextSizeChangeListener(listener);
            //return mDeleteButton.SetOnLongClickListener(listener);
elog("====xxxxxxxx====6====");
            var ec = mDeleteButton.SetOnLongClickListener(listener);
elog("====xxxxxxxx====7====");

            elog('====jso_activity_cb====OnCreate.end====');
        },  //OnCreate
        OnStart:function(aoContext){
            elog('====jso_activity_cb====OnStart.begin====');
        },
        OnResume:function(aoContext){
            elog('====jso_activity_cb====OnResume.begin====');
        },
        OnPause:function(aoContext){
            elog('====jso_activity_cb====OnPause.begin====');
        },
        OnStop:function(aoContext){
            elog('====jso_activity_cb====OnStop.begin====');
        },
        OnDestroy:function(aoContext){
            elog('====jso_activity_cb====OnDestroy.begin====');
        },

        OnUserInteraction:function(aoContext){
            elog('====jso_activity_cb====OnUserInteraction.begin====');
            if (mCurrentAnimator) {
                mCurrentAnimator.Cancel();
            }
            elog('====jso_activity_cb====OnUserInteraction.end====');
        },

        OnButtonClick:function(aoContext){
            elog('====jso_activity_cb====OnButtonClick.begin====');

/*
    ALOGD("Calculator::OnButtonClick====begin====");

    ECode ec = mListener->OnButtonClick(this, iview);

    mCurrentButton = iview;

    Int32 id;
    iview->GetId(&id);
    switch (id) {
        case R::id::eq:
            OnEquals();
            break;
        case R::id::del:
            OnDelete();
            break;
        case R::id::clr:
            OnClear();
            break;
        case R::id::fun_cos:
        case R::id::fun_ln:
        case R::id::fun_log:
        case R::id::fun_sin:
        case R::id::fun_tan:
            {
                // Add left parenthesis after functions.
                AutoPtr<ICharSequence> cs;
                ITextView::Probe(iview)->GetText((ICharSequence**)&cs);
                ITextView::Probe(mFormulaEditText)->Append(cs);
                ITextView::Probe(mFormulaEditText)->Append(StringUtils::ParseCharSequence(String("(")));
                break;
            }

        default:
            {
                AutoPtr<ICharSequence> cs;
                ITextView::Probe(iview)->GetText((ICharSequence**)&cs);
                ITextView::Probe(mFormulaEditText)->Append(cs);
                break;
            }
    }
    return NOERROR;
*/
            elog('====jso_activity_cb====OnButtonClick.end====');
        },

    }
};