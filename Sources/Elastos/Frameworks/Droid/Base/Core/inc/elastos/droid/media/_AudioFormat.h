
#ifndef ___AUDIOFORMAT_H__
#define ___AUDIOFORMAT_H__

#include "_Elastos.Droid.Media.h"
#include <system/audio.h>

// keep these values in sync with AudioFormat.java
#define ENCODING_PCM_16BIT  2
#define ENCODING_PCM_8BIT   3
#define ENCODING_PCM_FLOAT  4
#define ENCODING_AC3        5
#define ENCODING_E_AC3      6
#define ENCODING_DTS        7
#define ENCODING_DTS_HD     8
#define ENCODING_MP3        9
#define ENCODING_AAC_LC     10
#define ENCODING_AAC_HE_V1  11
#define ENCODING_AAC_HE_V2  12
#define ENCODING_INVALID    0
#define ENCODING_DEFAULT    1

namespace Elastos {
namespace Droid {
namespace Media {

static inline audio_format_t AudioFormatToNative(int audioFormat)
{
    switch (audioFormat) {
    case ENCODING_PCM_16BIT:
        return AUDIO_FORMAT_PCM_16_BIT;
    case ENCODING_PCM_8BIT:
        return AUDIO_FORMAT_PCM_8_BIT;
    case ENCODING_PCM_FLOAT:
        return AUDIO_FORMAT_PCM_FLOAT;
    case ENCODING_AC3:
        return AUDIO_FORMAT_AC3;
    case ENCODING_E_AC3:
        return AUDIO_FORMAT_E_AC3;
    case ENCODING_DTS:
        return AUDIO_FORMAT_DTS;
    case ENCODING_DTS_HD:
        return AUDIO_FORMAT_DTS_HD;
    case ENCODING_MP3:
        return AUDIO_FORMAT_MP3;
    case ENCODING_AAC_LC:
        return AUDIO_FORMAT_AAC_LC;
    case ENCODING_AAC_HE_V1:
        return AUDIO_FORMAT_AAC_HE_V1;
    case ENCODING_AAC_HE_V2:
        return AUDIO_FORMAT_AAC_HE_V2;
    case ENCODING_DEFAULT:
        return AUDIO_FORMAT_DEFAULT;
    default:
        return AUDIO_FORMAT_INVALID;
    }
}

static inline Int32 AudioFormatFromNative(audio_format_t nativeFormat)
{
    switch (nativeFormat) {
    case AUDIO_FORMAT_PCM_16_BIT:
        return ENCODING_PCM_16BIT;
    case AUDIO_FORMAT_PCM_8_BIT:
        return ENCODING_PCM_8BIT;
    case AUDIO_FORMAT_PCM_FLOAT:
        return ENCODING_PCM_FLOAT;

    // map these to ENCODING_PCM_FLOAT
    case AUDIO_FORMAT_PCM_8_24_BIT:
    case AUDIO_FORMAT_PCM_24_BIT_PACKED:
    case AUDIO_FORMAT_PCM_32_BIT:
        return ENCODING_PCM_FLOAT;

    case AUDIO_FORMAT_AC3:
        return ENCODING_AC3;
    case AUDIO_FORMAT_E_AC3:
        return ENCODING_E_AC3;
    case AUDIO_FORMAT_DTS:
        return ENCODING_DTS;
    case AUDIO_FORMAT_DTS_HD:
        return ENCODING_DTS_HD;
    case AUDIO_FORMAT_MP3:
        return ENCODING_MP3;
    case AUDIO_FORMAT_AAC_LC:
        return ENCODING_AAC_LC;
    case AUDIO_FORMAT_AAC_HE_V1:
        return ENCODING_AAC_HE_V1;
    case AUDIO_FORMAT_AAC_HE_V2:
        return ENCODING_AAC_HE_V2;
    case AUDIO_FORMAT_DEFAULT:
        return ENCODING_DEFAULT;
    default:
        return ENCODING_INVALID;
    }
}

static inline audio_channel_mask_t OutChannelMaskToNative(Int32 channelMask)
{
    switch (channelMask) {
    case IAudioFormat::CHANNEL_OUT_DEFAULT:
    case IAudioFormat::CHANNEL_INVALID:
        return AUDIO_CHANNEL_NONE;
    default:
        return (audio_channel_mask_t)(channelMask>>2);
    }
}

static inline Int32 OutChannelMaskFromNative(audio_channel_mask_t nativeMask)
{
    switch (nativeMask) {
    case AUDIO_CHANNEL_NONE:
        return IAudioFormat::CHANNEL_OUT_DEFAULT;
    default:
        return (Int32)nativeMask << 2;
    }
}

static inline audio_channel_mask_t InChannelMaskToNative(Int32 channelMask)
{
    return (audio_channel_mask_t)channelMask;
}

static inline Int32 InChannelMaskFromNative(audio_channel_mask_t nativeMask)
{
    return (Int32)nativeMask;
}

} // namespace Media
} // namespace Droid
} // namespace Elastos

#endif // ___AUDIOFORMAT_H__
