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

class Animation {
    constructor(){
        return Droid_New("Elastos.Droid.View.Animation.Animation");
    }
}
class LinearInterpolator{}
class Transformation{}

class BigDecimal {
    constructor(n){
        return Core_New("Elastos.Math.CBigDecimal", n);
    }

    static get _helper(){
        if(!BigDecimal.__helper){
            BigDecimal.__helper = Core_New("Elastos.Math.CBigDecimalHelper");
        }
        return BigDecimal.__helper;
    }

    static get ZERO(){
        return BigDecimal._helper.GetZERO();
    }
    static get ONE(){
        return BigDecimal._helper.GetONE();
    }
    static get TEN(){
        return BigDecimal._helper.GetTEN();
    }
    static ValueOf(v,s){
        return BigDecimal._helper.ValueOf(v, s);
    }
}
class BigInteger {
    constructor(ai){
        return Core_New("Elastos.Math.BigInteger", ai);
    }
}
class RoundingMode {
    constructor(ai){
        return Core_New("Elastos.Math.RoundingMode", ai);
    }
}

class Calculator {
    get MAX_NUMBER_LENGTH(){return 30;}

    static get CustomButtonAnimation() {
        if (!Calculator._CustomButtonAnimation) {
        Calculator._CustomButtonAnimation = class _ extends Animation {

        constructor() {
            super();
            this._object = null;
            this._from = 0;
            this._to = 0;
        }

        setFromColor(from) {
            this._from = from;
        }

        setToColor(to) {
            this._to = to;
        }

        setView(objectToAnimate) {
            this._object = objectToAnimate;
        }

        interpolateColor(a, b, proportion) {
            var startA = (a >> 24) & 0xff;
            var startR = (a >> 16) & 0xff;
            var startG = (a >> 8) & 0xff;
            var startB = a & 0xff;
            var endA = (b >> 24) & 0xff;
            var endR = (b >> 16) & 0xff;
            var endG = (b >> 8) & 0xff;
            var endB = b & 0xff;

            return ((startA + (proportion * (endA - startA))) << 24) |
                   ((startR + (proportion * (endR - startR))) << 16) |
                   ((startG + (proportion * (endG - startG))) << 8) |
                   ((startB + (proportion * (endB - startB))));
        }

        applyTransformation(interpolatedTime, t) {
            if (this._object) {
                this._object.SetBackgroundColor(this.interpolateColor(this._from, this._to, this.interpolatedTime));
                this._object.Invalidate();
            }
            super.applyTransformation(interpolatedTime, t);
        }

        }   //class _
        }   //if

        return Calculator._CustomButtonAnimation;
    }   //static get CustomButtonAnimation

    static get States() {
        if(!Calculator._States)Calculator._States = {GET_NUMBER:0, GET_OPERATION:1};
        return Calculator._States;
    }

    static get Operations() {
        if(!Calculator._Operations)Calculator._Operations = {PLUS:0, MINUS:1, DIV:2, MUL:3, POW:4, NOP:5};
        return Calculator._Operations;
    }

    get _currentState() {return this.__currentState;}
    set _currentState(state) {this.__currentState = state;}

    constructor(numberTextView, activity) {
        this.WRONG_ARGUMENT_TEXT = activity.GetResources().GetString(R.string.text_wrong_argument);
        this.TOO_LONG_VALUE_TEXT = activity.GetResources().GetString(R.string.text_too_long_value);
        this.INFINITY_TEXT = activity.GetResources().GetString(R.string.text_infinity);

        if (Calculator._maxNumber == null) {
            var maxNumber = "";
            for (var i = 0; i < this.MAX_NUMBER_LENGTH; i++)
                maxNumber += '9';
            Calculator._maxNumber = Core_New("Elastos.Math.CBigDecimal",maxNumber);
        }
        this._activity = activity;
        this._numberTextView = numberTextView;

        this.BigInteger__ZERO = Core_New("Elastos.Math.CBigIntegerHelper").GetZERO();
        this.BigDecimal__ZERO = Core_New("Elastos.Math.CBigDecimalHelper").GetZERO();

        this._leftArgument = Core_New("Elastos.Math.CBigDecimal",this.BigInteger__ZERO);
        this._memory = Core_New("Elastos.Math.CBigDecimal",this.BigInteger__ZERO);
        this._currentState = Calculator.States.GET_NUMBER;
        this._currentOperation = Calculator.Operations.NOP;

        var Context__MODE_PRIVATE = 0x0000;
        this._precision = activity.GetPreferences(Context__MODE_PRIVATE).GetInt32("precision", 2);
    }

    pow(base, power){ //throws TooLongValueException
        if (base.CompareTo(BigDecimal.ZERO) == 0) {
            return new BigDecimal(0);
        }
        else if (base.CompareTo(BigDecimal.ONE) == 0) {
            return new BigDecimal(1);
        }
        else if (power == 0) {
            return BigDecimal.ValueOf(1);
        }
        else if (power == 1) {
            return base;
        }
        else if (power < 0) {
            return BigDecimal.ValueOf(1).Divide(pow(base, -power));
        }
        else {
            var result = new BigDecimal(1);
            for (var i = 0; i < power; i++) {
                result = result.Multiply(base).StripTrailingZeros();
                if (result.ToString().length > this.MAX_NUMBER_LENGTH) {
                    result = this.round(result);
                    if (result.ToString().length > this.MAX_NUMBER_LENGTH)
                        throw new TooLongValueException();
                }
            }
            return result;
        }
    }

    static GetLength(value) {
        if (value.GetText) {
            value = value.GetText().ToString();
        }
        value += "";
        value = value.split(" ").join("");
        var len = value.length;
        if (value.charAt(0)=="-")len--;
         return len;
    }

    round(number) {
        var RoundingMode__HALF_UP = 4;

        var oRet = Core_New(
            "Elastos.Math.CBigDecimal",
            this.StripTailingZeros(
                number.SetScale(
                    this._precision,
                    RoundingMode__HALF_UP).ToString()
            )
        );

        return oRet;
    }

    IsInteger(number) {
        var BigDecimal__ROUND_HALF_UP = 4;
        return number.SetScale(0, BigDecimal__ROUND_HALF_UP).CompareTo(number) == 0;
    }

    SetZero() {
        this._numberTextView.SetText(CString("0"));
    }

    Clear() {
        this._numberTextView.SetText(null);
    }

    AddSymbol(c) {
        if (Calculator.GetLength(this._numberTextView) + 1 <= this.MAX_NUMBER_LENGTH) {
            if (c == '.') {
                this._numberTextView.SetText(CString(this._numberTextView.GetText().ToString() + c));
            } else {
                this.SetValue(this._numberTextView.GetText().ToString().replace(" ", "") + c);
            }
        }
    }

    GetValue() {
        var oRet;

        var text = this._numberTextView.GetText().ToString();

        if (text == this.TOO_LONG_VALUE_TEXT ||
                text == this.INFINITY_TEXT ||
                text == this.WRONG_ARGUMENT_TEXT ||
                Calculator.GetLength(this._numberTextView) == 0) {
            oRet = Core_New("Elastos.Math.CBigDecimal", 0);
        } else {
            oRet = Core_New("Elastos.Math.CBigDecimal", text.replace(" ", ""));
        }

        return oRet;
    }

    StripTailingZeros(value) {
        if (value=="0") {
            return value;
        }
        else if (value.indexOf(".")>-1) {
            var number = value.split(".");
            if (number[0].indexOf("0")>-1) {
                for (var i = 0; i < number[0].length; i++) {
                    if (number[0].charAt(i) != '0') {
                        number[0] = number[0].substring(i, number[0].length);
                        break;
                    }
                }
            }
            for (var i = number[1].length - 1; i >= 0; i--) {
                if (number[1].charAt(i) != '0') {
                    number[1] = number[1].substring(0, i + 1);
                    return number[0] + '.' + number[1];
                }
            }
            return number[0];
        }
        else {
            for (var i = 0; i < value.length; i++) {
                if (value.charAt(i) != '0') {
                    value = value.substring(i, value.length);
                    break;
                }
            }
            return value;
        }
    }

    SetValue(value) {
        if(value.ToString){ //BigDecimal
            value = value.ToString();
        }

        var devValue = Core_New("Elastos.Math.CBigDecimal",value);
        if (value == "0") {
            this.SetZero();
        }
        else if (Calculator.GetLength(value) > this.MAX_NUMBER_LENGTH) {
            elog("========SetValue error========");
            ss.crash();    //crash
        }
        else {
            CObject.showMethods(devValue);

            value = devValue.ToString();
            if (value.indexOf(".")<0) {
                this._numberTextView.SetText(CString(value));
            } else {
                var integer = value.split(".")[0];
                var newInteger;
                var i;

                if (integer.length > 3) {
                    newInteger = integer.substring(integer.length - 3, integer.length);
                    for (i = integer.length - 6; i > 0; i -= 3) {
                        newInteger = integer.substring(i, i + 3) + ' ' + newInteger;
                    }
                    if (i > -3) {
                        newInteger = integer.substring(0, i + 3) + ' ' + newInteger;
                    }
                } else {
                    newInteger = integer;
                }

                var real = value.split(".")[1];
                var newReal;

                if (real.length > 3) {
                    newReal = real.substring(0, 3);
                    for (i = 6; i < real.length; i += 3) {
                        newReal = newReal + ' ' + real.substring(i - 3, i);
                    }
                    if (i < real.length + 3) {
                        newReal = newReal + ' ' + real.substring(i - 3, real.length);
                    }
                } else {
                    newReal = real;
                }

                this._numberTextView.SetText(CString(newInteger + '.' + newReal));
            }
        }
    }

    Calculate(){
        var BigDecimal__ROUND_HALF_UP = 4;

        var rightArgument = this.GetValue();
        var result = rightArgument;
        switch (this._currentOperation) {
            case Calculator.Operations.PLUS:
                result = this._leftArgument.Add(rightArgument);
                break;
            case Calculator.Operations.MINUS:
                result = this._leftArgument.Subtract(rightArgument);
                break;
            case Calculator.Operations.DIV:
                if (rightArgument.CompareTo(this.BigDecimal__ZERO) != 0) {
                    result = this._leftArgument.Divide(rightArgument, this._precision,
                            BigDecimal__ROUND_HALF_UP);
                    result = result.StripTrailingZeros();
                } else {
                    throw new ZeroDivisionException();
                }
                break;
            case Calculator.Operations.MUL:
                result = this._leftArgument.Multiply(rightArgument);
                break;
            case Calculator.Operations.POW:
                if (this._leftArgument.CompareTo(this.round(
                        BigDecimal.ValueOf(Math.pow(Calculator._maxNumber.DoubleValue(), 0.5)))) > 0 &&
                        rightArgument.CompareTo(BigDecimal.ValueOf(2)) > 0)
                    throw new TooLongValueException();
                else {
                    if (this.IsInteger(rightArgument)) {
                        result = this.pow(this._leftArgument, rightArgument.Int32Value());
                    }
                    else {
                        result = BigDecimal.ValueOf(
                            Math.pow(
                                this._leftArgument.DoubleValue(),
                                rightArgument.DoubleValue()
                            )
                        );
                    }
                }
                break;
            default:
                break;
        }

        result = this.round(result);
        if (Calculator.GetLength(result) > this.MAX_NUMBER_LENGTH) {
            throw new TooLongValueException();
        }

        return result;
    }

    OnClick(v) {
        var oAnimation = Droid_New("Elastos.Droid.View.Animation.CAlphaAnimation", 0.3, 1.0);
        oAnimation.SetDuration(500);
        v.StartAnimation(oAnimation);

        //try {
            switch (v.GetId()) {
                case R.id.button0:
                {
                    if (this._currentState != Calculator.States.GET_NUMBER) {
                        this._currentState = Calculator.States.GET_NUMBER;
                        this.Clear();
                    }
                    if (this._numberTextView.GetText().ToString()!="0") {
                        this.AddSymbol('0');
                    }
                    break;
                }
                case R.id.button1:
                case R.id.button2:
                case R.id.button3:
                case R.id.button4:
                case R.id.button5:
                case R.id.button6:
                case R.id.button7:
                case R.id.button8:
                case R.id.button9:
                {
                    if (this._currentState != Calculator.States.GET_NUMBER) {
                        this._currentState = Calculator.States.GET_NUMBER;
                        this.Clear();
                    }
                    if (this._numberTextView.GetText().ToString() == "0") {
                        this.Clear();
                    }
                    this.AddSymbol(v.GetText().GetCharAt(0));
                    break;
                }
                case R.id.buttonPoint:
                    if (this._currentState != Calculator.States.GET_NUMBER) {
                        this._currentState = Calculator.States.GET_NUMBER;
                        this.SetZero();
                    }
                    if (!this._numberTextView.GetText().ToString().indexOf(".")>-1) {
                        this.AddSymbol('.');
                    }
                    break;
                case R.id.buttonPlus:
                {
                    this._leftArgument = this.Calculate();
                    if (this._currentState == Calculator.States.GET_NUMBER) {
                        this.SetValue(this._leftArgument);
                        this._currentState = Calculator.States.GET_OPERATION;
                    }
                    this._currentOperation = Calculator.Operations.PLUS;
                    break;
                }
                case R.id.buttonMinus:
                {
                    this._leftArgument = this.Calculate();
                    if (this._currentState == Calculator.States.GET_NUMBER) {
                        this.SetValue(this._leftArgument);
                        this._currentState = Calculator.States.GET_OPERATION;
                    }
                    this._currentOperation = Calculator.Operations.MINUS;
                    break;
                }
                case R.id.buttonMul:
                {
                    this._leftArgument = this.Calculate();
                    if (this._currentState == Calculator.States.GET_NUMBER) {
                        this.SetValue(this._leftArgument);
                        this._currentState = Calculator.States.GET_OPERATION;
                    }
                    this._currentOperation = Calculator.Operations.MUL;
                    break;
                }
                case R.id.buttonDiv:
                {
                    this._leftArgument = this.Calculate();
                    if (this._currentState == Calculator.States.GET_NUMBER) {
                        this.SetValue(this._leftArgument);
                        this._currentState = Calculator.States.GET_OPERATION;
                    }
                    this._currentOperation = Calculator.Operations.DIV;
                    break;
                }
                case R.id.buttonPow:
                {
                    this._leftArgument = this.Calculate();
                    if (this._currentState == Calculator.States.GET_NUMBER) {
                        this.SetValue(this._leftArgument);
                        this._currentState = Calculator.States.GET_OPERATION;
                    }
                    this._currentOperation = Calculator.Operations.POW;
                    break;
                }
                case R.id.buttonSqrt:
                {
                    this._leftArgument = this.GetValue();
                    if (this._leftArgument.CompareTo(this.BigDecimal__ZERO) < 0) {
                        throw new SquareRootOfNegativeNumber();
                    }

                    this._leftArgument = BigDecimal.ValueOf(Math.sqrt(this._leftArgument.DoubleValue())*100000000, 8);
                    this._leftArgument = this.round(this._leftArgument);
                    this._currentState = Calculator.States.GET_OPERATION;
                    this._currentOperation = Calculator.Operations.NOP;
                    this.SetValue(this._leftArgument);
                    break;
                }
                case R.id.buttonAssign:
                {
                    this._leftArgument = this.Calculate();
                    this.SetValue(this._leftArgument);
                    this._currentState = Calculator.States.GET_OPERATION;
                    this._currentOperation = Calculator.Operations.NOP;
                    break;
                }
                case R.id.buttonClear:
                {
                    this._currentState = Calculator.States.GET_NUMBER;
                    this._currentOperation = Calculator.Operations.NOP;
                    this._leftArgument = this.BigDecimal__ZERO;
                    this.SetZero();
                    break;
                }
                case R.id.buttonDelete:
                {
                    if (this._numberTextView.GetText().GetLength() > 1) {
                        this._currentState = Calculator.States.GET_NUMBER;
                        var s = this._numberTextView.GetText().ToString();
                        s = s.substring(0, s.length - 1)
                        this._numberTextView.SetText(CString(s));
                        this._leftArgument = this.GetValue();
                    } else if (this._numberTextView.GetText().GetLength() == 1)
                        this.SetZero();
                    break;
                }
                case R.id.buttonPlusMinus:
                {
                    if (this.GetValue().CompareTo(BigDecimal.ValueOf(0)) != 0) {
                        this._numberTextView.SetText(
                            this._numberTextView.GetText().GetCharAt(0) == '-' ?
                                this._numberTextView.GetText()
                                        .SubSequence(1, this._numberTextView.GetText().GetLength())
                                :CString("-" + this._numberTextView.GetText().ToString())
                        );
                    }
                    break;
                }
                case R.id.buttonM:
                    this.SetValue(this._memory);
                    break;
                case R.id.buttonMplus:
                    this._memory = this._memory.Add(this.GetValue());
                    break;
                case R.id.buttonMminus:
                    this._memory = this._memory.Subtract(this.GetValue());
                    break;
            }
        //} catch(e) {}
    }

    BindView(text) {
        // CharSequence content = _numberTextView.getText();
        // _numberTextView = text;
        // _numberTextView.setText(content);
    }

}   //class Calculator

class Calculator_ extends Calculator {
    //other code
}   //class Calculator_

return Calculator_;

};  //module.exports