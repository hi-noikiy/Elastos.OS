elog("====Calculate.js====begin====");

module.exports = function(aoElastos, aoActivity){
//--------common definition----begin----
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

//--------common definition----end----


//================SetContentView Test====begin================

    var STC = require("/data/temp/node/Common/js/elastos_layout.js")(aoElastos, aoActivity);
    var ST = new STC();

//================SetContentView Test====begin================


//--------.java----begin----

// package com.nolane.calculator;

// import android.app.Activity;
// import android.content.Context;
// import android.view.View;
// import android.view.View.OnClickListener;
// import android.view.animation.Animation;
class Animation {
    constructor(){
        //TODO: class ECO_PUBLIC Animation
        return Droid_New("Elastos.Droid.View.Animation.Animation");
    }
}
// import android.view.animation.LinearInterpolator;
class LinearInterpolator{}
// import android.view.animation.Transformation;
class Transformation{}
// import android.widget.Button;
// import android.widget.TextView;

// import java.math.BigDecimal;

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
// import java.math.BigInteger;
class BigInteger {
    constructor(ai){
        return Core_New("Elastos.Math.BigInteger", ai);
    }
}
// import java.math.RoundingMode;
class RoundingMode {
    constructor(ai){
        return Core_New("Elastos.Math.RoundingMode", ai);
    }
}

// @SuppressWarnings("ConstantConditions")
// public final class Calculator implements OnClickListener {
class Calculator {

//     private int MAX_NUMBER_LENGTH = 30;
    get MAX_NUMBER_LENGTH(){return 30;}
//     private final CharSequence WRONG_ARGUMENT_TEXT;
//     private final CharSequence TOO_LONG_VALUE_TEXT;
//     private final CharSequence INFINITY_TEXT;

//     private static BigDecimal _maxNumber;

//     private static class ZeroDivisionException extends ArithmeticException {
//     }

//     private static class SquareRootOfNegativeNumber extends ArithmeticException {
//     }

//     private static class TooLongValueException extends Exception {
//     }

//     private static class CustomButtonAnimation extends Animation {
    static get CustomButtonAnimation() {
        if (!Calculator._CustomButtonAnimation) {
        Calculator._CustomButtonAnimation = class _ extends Animation {

//         View _object;

//         int _from;
//         int _to;

//         public CustomButtonAnimation() {
//             super();
//             _object = null;
//             _from = 0;
//             _to = 0;
//         }
        constructor() {
            super();
            this._object = null;
            this._from = 0;
            this._to = 0;
        }

//         public void setFromColor(int from) {
//             _from = from;
//         }
        setFromColor(from) {
            this._from = from;
        }

//         public void setToColor(int to) {
//             _to = to;
//         }
        setToColor(to) {
            this._to = to;
        }

//         public void setView(View objectToAnimate) {
//             _object = objectToAnimate;
//         }
        setView(objectToAnimate) {
            this._object = objectToAnimate;
        }

//         @SuppressWarnings("RedundantCast")
//         private int interpolateColor(int a, int b, float proportion) {
//             int startA = (a >> 24) & 0xff;
//             int startR = (a >> 16) & 0xff;
//             int startG = (a >> 8) & 0xff;
//             int startB = a & 0xff;
//             int endA = (b >> 24) & 0xff;
//             int endR = (b >> 16) & 0xff;
//             int endG = (b >> 8) & 0xff;
//             int endB = b & 0xff;

//             return (int) ((startA + (int) (proportion * (endA - startA))) << 24) |
//                     (int) ((startR + (int) (proportion * (endR - startR))) << 16) |
//                     (int) ((startG + (int) (proportion * (endG - startG))) << 8) |
//                     (int) ((startB + (int) (proportion * (endB - startB))));
//         }
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

//         @Override
//         protected void applyTransformation(float interpolatedTime, Transformation t) {
//             if (_object != null) {
//                 _object.setBackgroundColor(interpolateColor(_from, _to, interpolatedTime));
//                 _object.invalidate();
//             }
//             super.applyTransformation(interpolatedTime, t);
//         }
        applyTransformation(interpolatedTime, t) {
            if (this._object) {
                this._object.SetBackgroundColor(this.interpolateColor(this._from, this._to, this.interpolatedTime));
                this._object.Invalidate();
            }
            super.applyTransformation(interpolatedTime, t);
        }

        //anim.setView(v);
        //anim.setDuration(500);
        //anim.setInterpolator(new LinearInterpolator());

        }   //class _
        }   //if
        return Calculator._CustomButtonAnimation;
//     }
    }   //static get CustomButtonAnimation

//     private static enum States {
//         GET_NUMBER, GET_OPERATION
//     }
    static get States() {
        if(!Calculator._States)Calculator._States = {GET_NUMBER:0, GET_OPERATION:1};
        return Calculator._States;
    }

//     private static enum Operations {
//         PLUS, MINUS, DIV, MUL, POW, NOP
//     }
    static get Operations() {
        if(!Calculator._Operations)Calculator._Operations = {PLUS:0, MINUS:1, DIV:2, MUL:3, POW:4, NOP:5};
        return Calculator._Operations;
    }

//     private TextView _numberTextView;
//     private Activity _activity;
//     private States _currentState;
    get _currentState() {return this.__currentState;}
    set _currentState(state) {this.__currentState = state;}
//     private Operations _currentOperation;
//     private BigDecimal _leftArgument;
//     private BigDecimal _memory;
//     private int _precision;

//     public Calculator(TextView numberTextView, Activity activity) {
//         super();

//         WRONG_ARGUMENT_TEXT = activity.getResources().getString(R.string.text_wrong_argument);
//         TOO_LONG_VALUE_TEXT = activity.getResources().getString(R.string.text_too_long_value);
//         INFINITY_TEXT = activity.getResources().getString(R.string.text_infinity);

//         if (_maxNumber == null) {
//             String maxNumber = "";
//             for (int i = 0; i < MAX_NUMBER_LENGTH; i++)
//                 maxNumber += '9';
//             _maxNumber = new BigDecimal(maxNumber);
//         }
//         _activity = activity;
//         _numberTextView = numberTextView;
//         _leftArgument = new BigDecimal(BigInteger.ZERO);
//         _memory = new BigDecimal(BigInteger.ZERO);
//         _currentState = States.GET_NUMBER;
//         _currentOperation = Operations.NOP;
//         _precision = activity.getPreferences(Context.MODE_PRIVATE).getInt("precision", 2);
//     }
    constructor(numberTextView, activity) {
        //super();

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
        this._precision = activity.GetPreferences(Context__MODE_PRIVATE).GetInt32("precision", 3);
    }

//     private BigDecimal pow(BigDecimal base, int power) throws TooLongValueException {
//         if (base.compareTo(BigDecimal.ZERO) == 0)
//             return new BigDecimal(0);
//         else if (base.compareTo(BigDecimal.ONE) == 0)
//             return new BigDecimal(1);
//         else if (power == 0)
//             return BigDecimal.valueOf(1);
//         else if (power == 1)
//             return base;
//         else if (power < 0)
//             return BigDecimal.valueOf(1).divide(pow(base, -power));
//         else {
//             BigDecimal result = new BigDecimal(1);
//             for (int i = 0; i < power; i++) {
//                 result = result.multiply(base).stripTrailingZeros();
//                 if (result.toString().length() > MAX_NUMBER_LENGTH) {
//                     result = round(result);
//                     if (result.toString().length() > MAX_NUMBER_LENGTH)
//                         throw new TooLongValueException();
//                 }
//             }
//             return result;
//         }
//     }
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

//     private static int GetLength(BigDecimal value) {
//         int len = value.toString().replace(" ", "").length();
//         if (len == 0)
//             return 0;
//         else
//             return len - (value.toString().charAt(0) == '-' ? 1 : 0);
//     }

//     private static int GetLength(String value) {
//         int len = value.replace(" ", "").length();
//         if (len == 0)
//             return 0;
//         else
//             return len - (value.charAt(0) == '-' ? 1 : 0);
//     }

//     private static int GetLength(TextView value) {
//         int len = value.getText().toString().replace(" ", "").length();
//         if (len == 0)
//             return 0;
//         else
//             return len - (value.getText().charAt(0) == '-' ? 1 : 0);
//     }
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

//     public void SetPrecision(int precision) {
//         _precision = precision;
//     }

//     private BigDecimal round(BigDecimal number) {
//         return new BigDecimal(StripTailingZeros(number.setScale(_precision, RoundingMode.HALF_UP).toString()));
//     }
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

//     private static boolean IsInteger(BigDecimal number) {
//         return number.setScale(0, BigDecimal.ROUND_HALF_UP).compareTo(number) == 0;
//     }
    IsInteger(number) {
        var BigDecimal__ROUND_HALF_UP = 4;
        return number.SetScale(0, BigDecimal__ROUND_HALF_UP).CompareTo(number) == 0;
    }

//     private void SetZero() {
//         _numberTextView.setText("0");
//     }
    SetZero() {
        this._numberTextView.SetText(CString("0"));
    }

//     private void Clear() {
//         _numberTextView.setText(null);
//     }
    Clear() {
        this._numberTextView.SetText(null);
    }

//     private void AddSymbol(char c) throws TooLongValueException {
//         if (GetLength(_numberTextView) + 1 <= MAX_NUMBER_LENGTH) {
//             if (c == '.')
//                 _numberTextView.setText(_numberTextView.getText().toString() + c);
//             else
//                 SetValue(_numberTextView.getText().toString().replace(" ", "") + c);
//         }
//     }
    AddSymbol(c) {
        //try{
        if (Calculator.GetLength(this._numberTextView) + 1 <= this.MAX_NUMBER_LENGTH) {
            if (c == '.') {
                this._numberTextView.SetText(CString(this._numberTextView.GetText().ToString() + c));
            } else {
                this.SetValue(this._numberTextView.GetText().ToString().replace(" ", "") + c);
            }
        }
        //} catch(e) {
        //    //throw TooLongValueException
        //}
    }

//     private BigDecimal GetValue() {
//         String text = _numberTextView.getText().toString();
//         if (text.compareTo(TOO_LONG_VALUE_TEXT.toString()) == 0 ||
//                 text.compareTo(INFINITY_TEXT.toString()) == 0 ||
//                 text.compareTo(WRONG_ARGUMENT_TEXT.toString()) == 0 ||
//                 GetLength(_numberTextView) == 0) {
//             return new BigDecimal(0);
//         } else
//             return new BigDecimal(text.replace(" ", ""));
//     }
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

//     private void SetValue(BigDecimal value) throws TooLongValueException {
//         SetValue(value.toString());
//     }

//     private String StripTailingZeros(String value) {
//         if (value.compareTo("0") == 0) {
//             return value;
//         } else if (value.contains(".")) {
//             String[] number = value.split("\\.");
//             if (number[0].compareTo("0") != 0)
//                 for (int i = 0; i < number[0].length(); i++)
//                     if (number[0].charAt(i) != '0') {
//                         number[0] = number[i].substring(i, number[0].length());
//                         break;
//                     }
//             for (int i = number[1].length() - 1; i >= 0; i--)
//                 if (number[1].charAt(i) != '0') {
//                     number[1] = number[1].substring(0, i + 1);
//                     return number[0] + '.' + number[1];
//                 }
//             return number[0];
//         } else {
//             for (int i = 0; i < value.length(); i++)
//                 if (value.charAt(i) != '0') {
//                     value = value.substring(i, value.length());
//                     break;
//                 }
//             return value;
//         }
//     }
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

//     private void SetValue(String value) throws TooLongValueException {
//         BigDecimal devValue = new BigDecimal(value);
//         if (value.compareTo("0") == 0)
//             SetZero();
//         else if (GetLength(value) > MAX_NUMBER_LENGTH)
//             throw new TooLongValueException();
//         else {
//             value = devValue.toString();
//             if (IsInteger(devValue)) {
//                 if (value.length() > 3) {
//                     String newText;
//                     int i;
//                     newText = value.substring(value.length() - 3, value.length());
//                     for (i = value.length() - 6; i > 0; i -= 3)
//                         newText = value.substring(i, i + 3) + ' ' + newText;
//                     if (i > -3)
//                         newText = value.substring(0, i + 3) + ' ' + newText;
//                     _numberTextView.setText(newText);
//                 } else
//                     _numberTextView.setText(value);
//             } else {
//                 String integer = value.split("\\.")[0];
//                 String newInteger;
//                 int i;

//                 if (integer.length() > 3) {
//                     newInteger = integer.substring(integer.length() - 3, integer.length());
//                     for (i = integer.length() - 6; i > 0; i -= 3)
//                         newInteger = integer.substring(i, i + 3) + ' ' + newInteger;
//                     if (i > -3)
//                         newInteger = integer.substring(0, i + 3) + ' ' + newInteger;
//                 } else
//                     newInteger = integer;

//                 String real = value.split("\\.")[1];
//                 String newReal;

//                 if (real.length() > 3) {
//                     newReal = real.substring(0, 3);
//                     for (i = 6; i < real.length(); i += 3)
//                         newReal = newReal + ' ' + real.substring(i - 3, i);
//                     if (i < real.length() + 3)
//                         newReal = newReal + ' ' + real.substring(i - 3, real.length());
//                 } else
//                     newReal = real;

//                 _numberTextView.setText(newInteger + '.' + newReal);
//             }
//         }
//     }
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
            ss.tt();    //crash
            //throw new TooLongValueException();
        }
        else {
            CObject.showMethods(devValue);

            value = devValue.ToString();
            //if (IsInteger(devValue)) {
            if (value.indexOf(".")<0) {
                // if (value.length > 3) {
                //     var newText;
                //     var i;
                //     newText = value.substring(value.length() - 3, value.length());
                //     for (i = value.length() - 6; i > 0; i -= 3)
                //         newText = value.substring(i, i + 3) + ' ' + newText;
                //     if (i > -3)
                //         newText = value.substring(0, i + 3) + ' ' + newText;
                //     _numberTextView.SetText(newText);
                // } else {
                //     _numberTextView.SetText(value);
                // }
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

//     private BigDecimal Calculate() throws ZeroDivisionException, TooLongValueException {
//         BigDecimal rightArgument = GetValue();
//         BigDecimal result = rightArgument;
//         switch (_currentOperation) {
//             case PLUS:
//                 result = _leftArgument.add(rightArgument);
//                 break;
//             case MINUS:
//                 result = _leftArgument.subtract(rightArgument);
//                 break;
//             case DIV:
//                 if (rightArgument.compareTo(BigDecimal.ZERO) != 0) {
//                     result = _leftArgument.divide(rightArgument, _precision,
//                             BigDecimal.ROUND_HALF_UP);
//                     result = result.stripTrailingZeros();
//                 } else {
//                     throw new ZeroDivisionException();
//                 }
//                 break;
//             case MUL:
//                 result = _leftArgument.multiply(rightArgument);
//                 break;
//             case POW:
//                 if (_leftArgument.compareTo(round(
//                         BigDecimal.valueOf(Math.pow(_maxNumber.doubleValue(), 0.5)))) > 0 &&
//                         rightArgument.compareTo(BigDecimal.valueOf(2)) > 0)
//                     throw new TooLongValueException();
//                 else {
//                     if (IsInteger(rightArgument))
//                         result = pow(_leftArgument, rightArgument.intValue());
//                     else {
//                         result = BigDecimal.valueOf(Math.pow(_leftArgument.doubleValue(),
//                                 rightArgument.doubleValue()));
//                     }
//                 }
//                 break;
//         }
//         result = round(result);
//         if (GetLength(result) > MAX_NUMBER_LENGTH)
//             throw new TooLongValueException();
//         return result;
//     }
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

//     @Override
//     public void onClick(View v) {
    OnClick(v) {
//         try {
//             CustomButtonAnimation anim = new CustomButtonAnimation();
//             anim.setFromColor(_activity.getResources()
//                     .getColor(R.color.button_pressed));
//             if (v.getTag().toString().compareTo("number_button") == 0) {
//                 anim.setToColor(_activity.getResources()
//                         .getColor(R.color.number_button_normal));
//             } else if (v.getTag().toString().compareTo("operation_button") == 0) {
//                 anim.setToColor(_activity.getResources()
//                         .getColor(R.color.operation_button_normal));
//             } else if (v.getTag().toString().compareTo("functional_button") == 0) {
//                 anim.setToColor(_activity.getResources()
//                         .getColor(R.color.functional_button_normal));
//             }
//             anim.setView(v);
//             anim.setDuration(500);
//             anim.setInterpolator(new LinearInterpolator());
//             v.startAnimation(anim);

if(false) {
elog("========anim========begin========");
            var anim = new Calculator.CustomButtonAnimation();
            anim.setFromColor(this._activity.GetResources()
                    .GetColor(R.color.button_pressed));
            if (v.GetTag().ToString().indexOf("number_button") == 0) {
                anim.setToColor(this._activity.GetResources()
                        .GetColor(R.color.number_button_normal));
            } else if (v.GetTag().ToString().indexOf("operation_button") == 0) {
                anim.setToColor(this._activity.GetResources()
                        .GetColor(R.color.operation_button_normal));
            } else if (v.GetTag().ToString().indexOf("functional_button") == 0) {
                anim.setToColor(this._activity.GetResources()
                        .GetColor(R.color.functional_button_normal));
            }
            anim.setView(v);
            anim.setDuration(500);
            anim.setInterpolator(new LinearInterpolator());
            v.StartAnimation(anim);
elog("========anim========end========");
}

//             switch (v.getId()) {
            switch (v.GetId()) {
//                 case R.id.button0:
//                     if (_currentState != States.GET_NUMBER) {
//                         _currentState = States.GET_NUMBER;
//                         Clear();
//                     }
//                     if (_numberTextView.getText().toString().compareTo("0") != 0)
//                         AddSymbol('0');
//                     break;
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

//                 case R.id.button1:
//                 case R.id.button2:
//                 case R.id.button3:
//                 case R.id.button4:
//                 case R.id.button5:
//                 case R.id.button6:
//                 case R.id.button7:
//                 case R.id.button8:
//                 case R.id.button9:
//                     if (_currentState != States.GET_NUMBER) {
//                         _currentState = States.GET_NUMBER;
//                         Clear();
//                     }
//                     if (_numberTextView.getText().toString().compareTo("0") == 0)
//                         Clear();
//                     AddSymbol(((Button) v).getText().charAt(0));
//                     break;
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

//                 case R.id.buttonPoint:
//                     if (_currentState != States.GET_NUMBER) {
//                         _currentState = States.GET_NUMBER;
//                         SetZero();
//                     }
//                     if (!_numberTextView.getText().toString().contains(Character.toString('.')))
//                         AddSymbol('.');
//                     break;
                case R.id.buttonPoint:
                    if (this._currentState != Calculator.States.GET_NUMBER) {
                        this._currentState = Calculator.States.GET_NUMBER;
                        this.SetZero();
                    }
                    if (!this._numberTextView.GetText().ToString().indexOf(".")>-1) {
                        this.AddSymbol('.');
                    }
                    break;

//                 case R.id.buttonPlus:
//                     _leftArgument = Calculate();
//                     if (_currentState == States.GET_NUMBER) {
//                         SetValue(_leftArgument);
//                         _currentState = States.GET_OPERATION;
//                     }
//                     _currentOperation = Operations.PLUS;
//                     break;
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

//                 case R.id.buttonMinus:
//                     _leftArgument = Calculate();
//                     if (_currentState == States.GET_NUMBER) {
//                         SetValue(_leftArgument);
//                         _currentState = States.GET_OPERATION;
//                     }
//                     _currentOperation = Operations.MINUS;
//                     break;
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

//                 case R.id.buttonMul:
//                     _leftArgument = Calculate();
//                     if (_currentState == States.GET_NUMBER) {
//                         SetValue(_leftArgument);
//                         _currentState = States.GET_OPERATION;
//                     }
//                     _currentOperation = Operations.MUL;
//                     break;
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

//                 case R.id.buttonDiv:
//                     _leftArgument = Calculate();
//                     if (_currentState == States.GET_NUMBER) {
//                         SetValue(_leftArgument);
//                         _currentState = States.GET_OPERATION;
//                     }
//                     _currentOperation = Operations.DIV;
//                     break;
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

//                 case R.id.buttonPow:
//                     _leftArgument = Calculate();
//                     if (_currentState == States.GET_NUMBER) {
//                         SetValue(_leftArgument);
//                         _currentState = States.GET_OPERATION;
//                     }
//                     _currentOperation = Operations.POW;
//                     break;
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

//                 case R.id.buttonSqrt:
//                     _leftArgument = GetValue();
//                     if (_leftArgument.compareTo(BigDecimal.ZERO) < 0)
//                         throw new SquareRootOfNegativeNumber();
//                     _leftArgument = BigDecimal.valueOf(Math.sqrt(_leftArgument.doubleValue()));
//                     _leftArgument = round(_leftArgument);
//                     _currentState = States.GET_OPERATION;
//                     _currentOperation = Operations.NOP;
//                     SetValue(_leftArgument);
//                     break;
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

//                 case R.id.buttonAssign:
//                     _leftArgument = Calculate();
//                     SetValue(_leftArgument);
//                     _currentState = States.GET_OPERATION;
//                     _currentOperation = Operations.NOP;
//                     break;
                case R.id.buttonAssign:
                {
                    this._leftArgument = this.Calculate();
                    this.SetValue(this._leftArgument);
                    this._currentState = Calculator.States.GET_OPERATION;
                    this._currentOperation = Calculator.Operations.NOP;
                    break;
                }

//                 case R.id.buttonClear:
//                     _currentState = States.GET_NUMBER;
//                     _currentOperation = Operations.NOP;
//                     _leftArgument = BigDecimal.ZERO;
//                     SetZero();
//                     break;
                case R.id.buttonClear:
                {
                    this._currentState = Calculator.States.GET_NUMBER;
                    this._currentOperation = Calculator.Operations.NOP;
                    this._leftArgument = this.BigDecimal__ZERO;
                    this.SetZero();
                    break;
                }

//                 case R.id.buttonDelete:
//                     if (_numberTextView.getText().length() > 1) {
//                         _currentState = States.GET_NUMBER;
//                         _numberTextView.setText(_numberTextView.getText().toString()
//                                 .substring(0, _numberTextView.length() - 1));
//                         _leftArgument = GetValue();
//                     } else if (_numberTextView.getText().length() == 1)
//                         SetZero();
//                     break;
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

//                 case R.id.buttonPlusMinus:
//                     if (GetValue().compareTo(BigDecimal.valueOf(0)) != 0)
//                         _numberTextView.setText(_numberTextView.getText().charAt(0) == '-' ?
//                                 _numberTextView.getText()
//                                         .subSequence(1, _numberTextView.getText().length()) :
//                                 "-" + _numberTextView.getText());
//                     break;
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

//                 case R.id.buttonM:
//                     SetValue(_memory);
//                     break;
//                 case R.id.buttonMplus:
//                     _memory = _memory.add(GetValue());
//                     break;
//                 case R.id.buttonMminus:
//                     _memory = _memory.subtract(GetValue());
//                     break;
                case R.id.buttonM:
                    this.SetValue(this._memory);
                    break;
                case R.id.buttonMplus:
                    this._memory = this._memory.Add(this.GetValue());
                    break;
                case R.id.buttonMminus:
                    this._memory = this._memory.Subtract(this.GetValue());
                    break;
//             }
            }
//         } catch (SquareRootOfNegativeNumber ex) {
//             _numberTextView.setText(WRONG_ARGUMENT_TEXT);
//             _currentState = States.GET_OPERATION;
//             _currentOperation = Operations.NOP;
//             _leftArgument = BigDecimal.ZERO;
//         } catch (ArithmeticException ex) {
//             _numberTextView.setText(INFINITY_TEXT);
//             _currentState = States.GET_OPERATION;
//             _currentOperation = Operations.NOP;
//             _leftArgument = BigDecimal.ZERO;
//         } catch (TooLongValueException ex) {
//             _numberTextView.setText(TOO_LONG_VALUE_TEXT);
//             _currentState = States.GET_OPERATION;
//             _currentOperation = Operations.NOP;
//             _leftArgument = BigDecimal.ZERO;
//         } catch (NumberFormatException ex) {
//             _numberTextView.setText("0");
//             _currentState = States.GET_OPERATION;
//             _currentOperation = Operations.NOP;
//             _leftArgument = BigDecimal.ZERO;
//         } catch (NullPointerException ex) {
//             ex.printStackTrace();
//         }
//     }
    }

//     public void BindView(TextView text) {
//         CharSequence content = _numberTextView.getText();
//         _numberTextView = text;
//         _numberTextView.setText(content);
//     }
    BindView(text) {
        // CharSequence content = _numberTextView.getText();
        // _numberTextView = text;
        // _numberTextView.setText(content);
    }

// }
}   //class Calculator

//--------.java----end----

    class Calculator_ extends Calculator {
    }   //class Calculator_

    return Calculator_;

};  //module.exports

elog("====Calculator.js====end====");