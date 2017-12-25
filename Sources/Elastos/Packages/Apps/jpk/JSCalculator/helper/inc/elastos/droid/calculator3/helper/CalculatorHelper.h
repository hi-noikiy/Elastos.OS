//=========================================================================
// Copyright (C) 2012 The Elastos Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//=========================================================================

#ifndef _ELASTOS_DROID_CALCULATOR3_HELPER_CALCULATORHELPER_H__
#define _ELASTOS_DROID_CALCULATOR3_HELPER_CALCULATORHELPER_H__

#include <elastos/droid/animation/AnimatorListenerAdapter.h>
#include <elastos/droid/app/Activity.h>
#include <elastos/droid/ext/frameworkext.h>
#include <Elastos.Droid.Text.h>
#include <elastos/core/Object.h>

#include "_Elastos.Droid.Support.V4.View.h"
#include "_Elastos.Droid.Calculator3.Component.h"
#include "_Elastos.Droid.Calculator3.Expression.h"
#include "_Elastos.Droid.Calculator3.h"

//#include "CNodeListener.h"

using Elastos::Droid::Animation::IAnimator;
using Elastos::Droid::Animation::IAnimatorListener;
using Elastos::Droid::Animation::IValueAnimator;
using Elastos::Droid::Animation::IAnimatorUpdateListener;
using Elastos::Droid::Animation::AnimatorListenerAdapter;
using Elastos::Droid::App::Activity;
using Elastos::Droid::App::IActivity;
using Elastos::Droid::Text::IEditable;
using Elastos::Droid::Text::IEditableFactory;
using Elastos::Droid::Text::ITextWatcher;
using Elastos::Droid::View::EIID_IViewOnLongClickListener;
using Elastos::Droid::View::IKeyEvent;
using Elastos::Droid::View::IView;
using Elastos::Droid::View::IViewGroupOverlay;
using Elastos::Droid::View::IViewOnLongClickListener;
using Elastos::Droid::View::IViewOnKeyListener;
using Elastos::Droid::Widget::ITextView;
using Elastos::Droid::Os::IBundle;

using Elastos::Droid::Support::V4::View::IViewPager;

using Elastos::Droid::Calculator3::Component::IOnTextSizeChangeListener;
using Elastos::Droid::Calculator3::Component::ICalculatorEditText;
using Elastos::Droid::Calculator3::Component::EIID_IOnTextSizeChangeListener;

using Elastos::Droid::Calculator3::Expression::IEvaluateCallback;
using Elastos::Droid::Calculator3::Expression::EIID_IEvaluateCallback;
using Elastos::Droid::Calculator3::Expression::ICalculatorExpressionTokenizer;
using Elastos::Droid::Calculator3::Expression::ICalculatorExpressionEvaluator;
using Elastos::Droid::Calculator3::Expression::ICalculatorExpressionBuilder;
using Elastos::Droid::Calculator3::Expression::CCalculatorExpressionTokenizer;
using Elastos::Droid::Calculator3::Expression::CCalculatorExpressionEvaluator;
using Elastos::Droid::Calculator3::Expression::CCalculatorExpressionBuilder;

namespace Elastos {
namespace Droid {
namespace Calculator3 {
namespace Helper {

class CalculatorHelper
    //: public Activity
    : public Object
    , public IEvaluateCallback
    , public ICalculatorListener
    , public ICalculator
{
private:
    class InnerListener
        : public Object
        , public IOnTextSizeChangeListener
        , public IViewOnLongClickListener
    {
    public:
        CAR_INTERFACE_DECL()

        InnerListener(
            /* [in] */ CalculatorHelper* host);

        CARAPI OnLongClick(
            /* [in] */ IView* iview,
            /* [out] */ Boolean* result);

        CARAPI OnEvaluate(
            /* [in] */ const String& expr,
            /* [in] */ const String& result,
            /* [in] */ Int32 errorResourceId);

        CARAPI OnTextSizeChanged(
            /* [in] */ ITextView* textView,
            /* [in] */ Float oldSize);
    private:
        CalculatorHelper* mHost;
    };

    class MyTextWatcher
        : public Object
        , public ITextWatcher
    {
        friend class CalculatorHelper;

    public:
        MyTextWatcher(
            /* [in] */ CalculatorHelper* host);

        CAR_INTERFACE_DECL()

        CARAPI BeforeTextChanged(
            /* [in] */ ICharSequence* charSequence,
            /* [in] */ Int32 start,
            /* [in] */ Int32 count,
            /* [in] */ Int32 after);

        CARAPI OnTextChanged(
            /* [in] */ ICharSequence* charSequence,
            /* [in] */ Int32 start,
            /* [in] */ Int32 count,
            /* [in] */ Int32 after);

        CARAPI AfterTextChanged(
            /* [in] */ IEditable* editable);

    private:
        CalculatorHelper* mHost;
    };

    class MyOnKeyListener
        : public Object
        , public IViewOnKeyListener
    {
        friend class CalculatorHelper;

    public:
        MyOnKeyListener(
            /* [in] */ CalculatorHelper* host);

        CAR_INTERFACE_DECL()

        CARAPI OnKey(
            /* [in] */ IView* view,
            /* [in] */ Int32 keyCode,
            /* [in] */ IKeyEvent* keyEvent,
            /* [out] */ Boolean* result);

    private:
        CalculatorHelper* mHost;
    };

    class MyEditableFactory
        : public Object
        , public IEditableFactory
    {
        friend class CalculatorHelper;

    public:
        MyEditableFactory(
            /* [in] */ CalculatorHelper* host);

        CAR_INTERFACE_DECL()

        CARAPI NewEditable(
            /* [in] */ ICharSequence* source,
            /* [out] */ IEditable** editable);

    private:
        CalculatorHelper* mHost;
    };

    class RevealAnimatorListenerAdapter
        : public AnimatorListenerAdapter
    {
        friend class CalculatorHelper;

    public:
        RevealAnimatorListenerAdapter(
            /* [in] */ CalculatorHelper* host,
            /* [in] */ IViewGroupOverlay* vgo,
            /* [in] */ IView* view);

        CARAPI OnAnimationEnd(
            /* [in] */ IAnimator* animation);

    private:
        CalculatorHelper* mHost;
        AutoPtr<IViewGroupOverlay> mVgo;
        AutoPtr<IView> mView;
    };

    class OnClearAnimatorListenerAdapter
        : public AnimatorListenerAdapter
    {
        friend class CalculatorHelper;

    public:
        OnClearAnimatorListenerAdapter(
            /* [in] */ CalculatorHelper* host);

        CARAPI OnAnimationEnd(
            /* [in] */ IAnimator* animation);

    private:
        CalculatorHelper* mHost;
    };

    class OnErrorAnimatorListenerAdapter
        : public AnimatorListenerAdapter
    {
        friend class CalculatorHelper;

    public:
        OnErrorAnimatorListenerAdapter(
            /* [in] */ CalculatorHelper* host,
            /* [in] */ Int32 errorResourceId);

        CARAPI OnAnimationEnd(
            /* [in] */ IAnimator* animation);

    private:
        CalculatorHelper* mHost;
        Int32 mErrorResId;
    };

    class MyAnimatorUpdateListener
        : public Object
        , public IAnimatorUpdateListener
    {
        friend class CalculatorHelper;

    public:
        MyAnimatorUpdateListener(
            /* [in] */ CalculatorHelper* host);

        CAR_INTERFACE_DECL()

        CARAPI OnAnimationUpdate(
            /* [in] */ IValueAnimator* valueAnimator);

    private:
        CalculatorHelper* mHost;
    };

    class OnResultAnimatorListenerAdapter
        : public AnimatorListenerAdapter
    {
        friend class CalculatorHelper;

    public:
        OnResultAnimatorListenerAdapter(
            /* [in] */ CalculatorHelper* host,
            /* [in] */ const String& result,
            /* [in] */ Int32 color);

        CARAPI OnAnimationStart(
            /* [in] */ IAnimator* animation);

        CARAPI OnAnimationEnd(
            /* [in] */ IAnimator* animation);

    private:
        CalculatorHelper* mHost;
        String mResult;
        Int32 mColor;
    };

public:
    CalculatorHelper();

    CARAPI constructor();

    CARAPI constructor(PInterface host);

    virtual ~CalculatorHelper();

    CAR_INTERFACE_DECL()

    CARAPI OnBackPressed(
        /* [in] */ IContext* ctx);

    CARAPI OnUserInteraction(
        /* [in] */ IContext* ctx);

    CARAPI OnButtonClick(
        /* [in] */ IView* iview);

    CARAPI OnLongClick(
        /* [in] */ IView* iview,
        /* [out] */ Boolean* result);

    CARAPI OnEvaluate(
        /* [in] */ const String& expr,
        /* [in] */ const String& result,
        /* [in] */ Int32 errorResourceId);

    CARAPI OnTextSizeChanged(
        /* [in] */ ITextView* textView,
        /* [in] */ Float oldSize);

protected:
    CARAPI OnCreate(
        /* [in] */ IContext* ctx,
        /* [in] */ IBundle* savedInstanceState);

    CARAPI OnSaveInstanceState(
        /* [in] */ IContext* ctx,
        /*[in] */ /*@NonNull */IBundle* outState);

private:
    CARAPI_(void) SetState(
        /*[in] */ CalculatorState state);

    CARAPI_(void) OnEquals();

    CARAPI_(void) OnDelete();

    CARAPI_(void) Reveal(
        /* [in] */ IView* sourceView,
        /* [in] */ Int32 colorRes,
        /* [in] */ IAnimatorListener* listener);

    CARAPI_(void) OnClear();

    CARAPI_(void) OnError(
        /* [in] */ Int32 errorResourceId);

    CARAPI_(void) OnResult(
        /* [in] */ const String& result);

private:
    static const String NAME;

    // instance state keys
    static const String KEY_CURRENT_STATE;
    static const String KEY_CURRENT_EXPRESSION;

    AutoPtr<ITextWatcher> mFormulaTextWatcher;
    AutoPtr<IViewOnKeyListener> mFormulaOnKeyListener;
    AutoPtr<IEditableFactory> mFormulaEditableFactory;

    CalculatorState mCurrentState;
    AutoPtr<ICalculatorExpressionTokenizer> mTokenizer;
    AutoPtr<ICalculatorExpressionEvaluator> mEvaluator;

    AutoPtr<IView> mDisplayView;
    AutoPtr<ICalculatorEditText> mFormulaEditText;
    AutoPtr<ICalculatorEditText> mResultEditText;
    AutoPtr<IViewPager> mPadViewPager;
    AutoPtr<IView> mDeleteButton;
    AutoPtr<IView> mEqualButton;
    AutoPtr<IView> mClearButton;

    AutoPtr<IView> mCurrentButton;
    AutoPtr<IAnimator> mCurrentAnimator;

private:
    static const String TAG;

    String mPackageName;
    String mActivityName;

    AutoPtr<IHandler> mHandler;
    AutoPtr<ICalculatorListener> mListener;

private:
    Activity* mHost;
};

} // namespace Helper
} // namespace Calculator3
} // namespace Droid
} // namespace Elastos

#endif // _ELASTOS_DROID_CALCULATOR3_HELPER_CALCULATORHELPER_H__