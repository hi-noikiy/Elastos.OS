// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file has been auto-generated by code_generator_v8.py. DO NOT MODIFY!

#include "config.h"
#include "V8NodeFilter.h"

#include "bindings/core/v8/V8Node.h"
#include "bindings/v8/ExceptionState.h"
#include "bindings/v8/V8DOMConfiguration.h"
#include "bindings/v8/V8HiddenValue.h"
#include "bindings/v8/V8ObjectConstructor.h"
#include "core/dom/ContextFeatures.h"
#include "core/dom/Document.h"
#include "platform/RuntimeEnabledFeatures.h"
#include "platform/TraceEvent.h"
#include "wtf/GetPtr.h"
#include "wtf/RefPtr.h"

namespace WebCore {

static void initializeScriptWrappableForInterface(NodeFilter* object)
{
    if (ScriptWrappable::wrapperCanBeStoredInObject(object))
        ScriptWrappable::fromObject(object)->setTypeInfo(&V8NodeFilter::wrapperTypeInfo);
    else
        ASSERT_NOT_REACHED();
}

} // namespace WebCore

void webCoreInitializeScriptWrappableForInterface(WebCore::NodeFilter* object)
{
    WebCore::initializeScriptWrappableForInterface(object);
}

namespace WebCore {
const WrapperTypeInfo V8NodeFilter::wrapperTypeInfo = { gin::kEmbedderBlink, V8NodeFilter::domTemplate, V8NodeFilter::derefObject, 0, 0, 0, V8NodeFilter::installPerContextEnabledMethods, 0, WrapperTypeObjectPrototype, WillBeGarbageCollectedObject };

namespace NodeFilterV8Internal {

template <typename T> void V8_USE(T) { }

static void acceptNodeMethod(const v8::FunctionCallbackInfo<v8::Value>& info)
{
    ExceptionState exceptionState(ExceptionState::ExecutionContext, "acceptNode", "NodeFilter", info.Holder(), info.GetIsolate());
    NodeFilter* impl = V8NodeFilter::toNative(info.Holder());
    Node* n;
    {
        v8::TryCatch block;
        V8RethrowTryCatchScope rethrow(block);
        TONATIVE_VOID_INTERNAL(n, V8Node::toNativeWithTypeCheck(info.GetIsolate(), info[0]));
    }
    int result = impl->acceptNode(n, exceptionState);
    if (exceptionState.hadException()) {
        exceptionState.throwIfNeeded();
        return;
    }
    v8SetReturnValueInt(info, result);
}

static void acceptNodeMethodCallback(const v8::FunctionCallbackInfo<v8::Value>& info)
{
    TRACE_EVENT_SET_SAMPLING_STATE("Blink", "DOMMethod");
    NodeFilterV8Internal::acceptNodeMethod(info);
    TRACE_EVENT_SET_SAMPLING_STATE("V8", "V8Execution");
}

} // namespace NodeFilterV8Internal

static const V8DOMConfiguration::MethodConfiguration V8NodeFilterMethods[] = {
    {"acceptNode", NodeFilterV8Internal::acceptNodeMethodCallback, 0, 0},
};

static void configureV8NodeFilterTemplate(v8::Handle<v8::FunctionTemplate> functionTemplate, v8::Isolate* isolate)
{
    functionTemplate->ReadOnlyPrototype();

    v8::Local<v8::Signature> defaultSignature;
    defaultSignature = V8DOMConfiguration::installDOMClassTemplate(functionTemplate, "NodeFilter", v8::Local<v8::FunctionTemplate>(), V8NodeFilter::internalFieldCount,
        0, 0,
        0, 0,
        V8NodeFilterMethods, WTF_ARRAY_LENGTH(V8NodeFilterMethods),
        isolate);
    v8::Local<v8::ObjectTemplate> instanceTemplate ALLOW_UNUSED = functionTemplate->InstanceTemplate();
    v8::Local<v8::ObjectTemplate> prototypeTemplate ALLOW_UNUSED = functionTemplate->PrototypeTemplate();
    static const V8DOMConfiguration::ConstantConfiguration V8NodeFilterConstants[] = {
        {"FILTER_ACCEPT", 1},
        {"FILTER_REJECT", 2},
        {"FILTER_SKIP", 3},
        {"SHOW_ALL", 0xFFFFFFFF},
        {"SHOW_ELEMENT", 0x00000001},
        {"SHOW_ATTRIBUTE", 0x00000002},
        {"SHOW_TEXT", 0x00000004},
        {"SHOW_CDATA_SECTION", 0x00000008},
        {"SHOW_ENTITY_REFERENCE", 0x00000010},
        {"SHOW_ENTITY", 0x00000020},
        {"SHOW_PROCESSING_INSTRUCTION", 0x00000040},
        {"SHOW_COMMENT", 0x00000080},
        {"SHOW_DOCUMENT", 0x00000100},
        {"SHOW_DOCUMENT_TYPE", 0x00000200},
        {"SHOW_DOCUMENT_FRAGMENT", 0x00000400},
        {"SHOW_NOTATION", 0x00000800},
    };
    V8DOMConfiguration::installConstants(functionTemplate, prototypeTemplate, V8NodeFilterConstants, WTF_ARRAY_LENGTH(V8NodeFilterConstants), isolate);
    COMPILE_ASSERT(1 == NodeFilter::FILTER_ACCEPT, TheValueOfNodeFilter_FILTER_ACCEPTDoesntMatchWithImplementation);
    COMPILE_ASSERT(2 == NodeFilter::FILTER_REJECT, TheValueOfNodeFilter_FILTER_REJECTDoesntMatchWithImplementation);
    COMPILE_ASSERT(3 == NodeFilter::FILTER_SKIP, TheValueOfNodeFilter_FILTER_SKIPDoesntMatchWithImplementation);
    COMPILE_ASSERT(0xFFFFFFFF == NodeFilter::SHOW_ALL, TheValueOfNodeFilter_SHOW_ALLDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000001 == NodeFilter::SHOW_ELEMENT, TheValueOfNodeFilter_SHOW_ELEMENTDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000002 == NodeFilter::SHOW_ATTRIBUTE, TheValueOfNodeFilter_SHOW_ATTRIBUTEDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000004 == NodeFilter::SHOW_TEXT, TheValueOfNodeFilter_SHOW_TEXTDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000008 == NodeFilter::SHOW_CDATA_SECTION, TheValueOfNodeFilter_SHOW_CDATA_SECTIONDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000010 == NodeFilter::SHOW_ENTITY_REFERENCE, TheValueOfNodeFilter_SHOW_ENTITY_REFERENCEDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000020 == NodeFilter::SHOW_ENTITY, TheValueOfNodeFilter_SHOW_ENTITYDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000040 == NodeFilter::SHOW_PROCESSING_INSTRUCTION, TheValueOfNodeFilter_SHOW_PROCESSING_INSTRUCTIONDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000080 == NodeFilter::SHOW_COMMENT, TheValueOfNodeFilter_SHOW_COMMENTDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000100 == NodeFilter::SHOW_DOCUMENT, TheValueOfNodeFilter_SHOW_DOCUMENTDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000200 == NodeFilter::SHOW_DOCUMENT_TYPE, TheValueOfNodeFilter_SHOW_DOCUMENT_TYPEDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000400 == NodeFilter::SHOW_DOCUMENT_FRAGMENT, TheValueOfNodeFilter_SHOW_DOCUMENT_FRAGMENTDoesntMatchWithImplementation);
    COMPILE_ASSERT(0x00000800 == NodeFilter::SHOW_NOTATION, TheValueOfNodeFilter_SHOW_NOTATIONDoesntMatchWithImplementation);

    // Custom toString template
    functionTemplate->Set(v8AtomicString(isolate, "toString"), V8PerIsolateData::from(isolate)->toStringTemplate());
}

v8::Handle<v8::FunctionTemplate> V8NodeFilter::domTemplate(v8::Isolate* isolate)
{
    return V8DOMConfiguration::domClassTemplate(isolate, const_cast<WrapperTypeInfo*>(&wrapperTypeInfo), configureV8NodeFilterTemplate);
}

bool V8NodeFilter::hasInstance(v8::Handle<v8::Value> v8Value, v8::Isolate* isolate)
{
    return V8PerIsolateData::from(isolate)->hasInstance(&wrapperTypeInfo, v8Value);
}

v8::Handle<v8::Object> V8NodeFilter::findInstanceInPrototypeChain(v8::Handle<v8::Value> v8Value, v8::Isolate* isolate)
{
    return V8PerIsolateData::from(isolate)->findInstanceInPrototypeChain(&wrapperTypeInfo, v8Value);
}

NodeFilter* V8NodeFilter::toNativeWithTypeCheck(v8::Isolate* isolate, v8::Handle<v8::Value> value)
{
    return hasInstance(value, isolate) ? fromInternalPointer(v8::Handle<v8::Object>::Cast(value)->GetAlignedPointerFromInternalField(v8DOMWrapperObjectIndex)) : 0;
}

v8::Handle<v8::Object> wrap(NodeFilter* impl, v8::Handle<v8::Object> creationContext, v8::Isolate* isolate)
{
    ASSERT(impl);
    ASSERT(!DOMDataStore::containsWrapper<V8NodeFilter>(impl, isolate));
    return V8NodeFilter::createWrapper(impl, creationContext, isolate);
}

v8::Handle<v8::Object> V8NodeFilter::createWrapper(PassRefPtrWillBeRawPtr<NodeFilter> impl, v8::Handle<v8::Object> creationContext, v8::Isolate* isolate)
{
    ASSERT(impl);
    ASSERT(!DOMDataStore::containsWrapper<V8NodeFilter>(impl.get(), isolate));
    if (ScriptWrappable::wrapperCanBeStoredInObject(impl.get())) {
        const WrapperTypeInfo* actualInfo = ScriptWrappable::fromObject(impl.get())->typeInfo();
        // Might be a XXXConstructor::wrapperTypeInfo instead of an XXX::wrapperTypeInfo. These will both have
        // the same object de-ref functions, though, so use that as the basis of the check.
        RELEASE_ASSERT_WITH_SECURITY_IMPLICATION(actualInfo->derefObjectFunction == wrapperTypeInfo.derefObjectFunction);
    }

    v8::Handle<v8::Object> wrapper = V8DOMWrapper::createWrapper(creationContext, &wrapperTypeInfo, toInternalPointer(impl.get()), isolate);
    if (UNLIKELY(wrapper.IsEmpty()))
        return wrapper;

    installPerContextEnabledProperties(wrapper, impl.get(), isolate);
    V8DOMWrapper::associateObjectWithWrapper<V8NodeFilter>(impl, &wrapperTypeInfo, wrapper, isolate, WrapperConfiguration::Dependent);
    return wrapper;
}

void V8NodeFilter::derefObject(void* object)
{
#if !ENABLE(OILPAN)
    fromInternalPointer(object)->deref();
#endif // !ENABLE(OILPAN)
}

template<>
v8::Handle<v8::Value> toV8NoInline(NodeFilter* impl, v8::Handle<v8::Object> creationContext, v8::Isolate* isolate)
{
    return toV8(impl, creationContext, isolate);
}

} // namespace WebCore
