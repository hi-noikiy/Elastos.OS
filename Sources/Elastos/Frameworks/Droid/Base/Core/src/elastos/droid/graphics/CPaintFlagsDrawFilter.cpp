
#include "Elastos.Droid.Content.h"
#include "Elastos.Droid.Os.h"
#include "elastos/droid/graphics/CPaintFlagsDrawFilter.h"
#include <skia/effects/SkPaintFlagsDrawFilter.h>
#include <skia/core/SkPaint.h>

namespace Elastos {
namespace Droid {
namespace Graphics {

CAR_OBJECT_IMPL(CPaintFlagsDrawFilter);
CAR_INTERFACE_IMPL(CPaintFlagsDrawFilter, DrawFilter, IPaintFlagsDrawFilter);
ECode CPaintFlagsDrawFilter::constructor(
    /* [in] */ Int32 clearBits,
    /* [in] */ Int32 setBits)
{
    mClearBits = clearBits;
    mSetBits = setBits;
    mNativeInstance = NativeConstructor(clearBits, setBits);
    return NOERROR;
}

// Custom version of SkPaintFlagsDrawFilter that also calls setFilterQuality.
class CompatFlagsDrawFilter : public SkPaintFlagsDrawFilter {
public:
    CompatFlagsDrawFilter(uint32_t clearFlags, uint32_t setFlags,
            SkFilterQuality desiredQuality)
    : SkPaintFlagsDrawFilter(clearFlags, setFlags)
    , fDesiredQuality(desiredQuality) {
    }

    virtual bool filter(SkPaint* paint, Type type) {
        SkPaintFlagsDrawFilter::filter(paint, type);
        paint->setFilterQuality(fDesiredQuality);
        return true;
    }

private:
    const SkFilterQuality fDesiredQuality;
};

// Returns whether flags contains FILTER_BITMAP_FLAG. If flags does, remove it.
static inline bool hadFiltering(Int32& flags) {
    // Equivalent to the Java Paint's FILTER_BITMAP_FLAG.
    static const uint32_t sFilterBitmapFlag = 0x02;

    const bool result = (flags & sFilterBitmapFlag) != 0;
    flags &= ~sFilterBitmapFlag;
    return result;
}

Int64 CPaintFlagsDrawFilter::NativeConstructor(
    /* [in] */ Int32 clearFlags,
    /* [in] */ Int32 setFlags)
{
    if (clearFlags | setFlags) {
        // Mask both groups of flags to remove FILTER_BITMAP_FLAG, which no
        // longer has a Skia equivalent flag (instead it corresponds to
        // calling setFilterLevel), and keep track of which group(s), if
        // any, had the flag set.
        const bool turnFilteringOn = hadFiltering(setFlags);
        const bool turnFilteringOff = hadFiltering(clearFlags);

        SkDrawFilter* filter;
        if (turnFilteringOn) {
            // Turning filtering on overrides turning it off.
            filter = new CompatFlagsDrawFilter(clearFlags, setFlags,
                    kLow_SkFilterQuality);
        } else if (turnFilteringOff) {
            filter = new CompatFlagsDrawFilter(clearFlags, setFlags,
                    kNone_SkFilterQuality);
        } else {
            filter = new SkPaintFlagsDrawFilter(clearFlags, setFlags);
        }
        return reinterpret_cast<Int64>(filter);
    }
    return 0;
}

} // namespace Graphics
} // namepsace Droid
} // namespace Elastos
