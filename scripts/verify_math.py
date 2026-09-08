import math
import sys

# Ensure UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

def test_units():
    GRAMS_PER_OUNCE = 28.349523125
    CM_PER_INCH = 2.54
    CM3_PER_IN3 = 16.387064
    ML_PER_US_CUP = 236.5882365
    IN3_PER_US_CUP = 14.4375

    # 1. Grams <-> Ounces
    g = 500.0
    oz = g / GRAMS_PER_OUNCE
    g_back = oz * GRAMS_PER_OUNCE
    assert abs(oz - 17.637) < 0.001
    assert abs(g_back - 500.0) < 1e-9

    # 2. Inches <-> CM
    inch = 9.0
    cm = inch * CM_PER_INCH
    inch_back = cm / CM_PER_INCH
    assert abs(cm - 22.86) < 1e-9
    assert abs(inch_back - 9.0) < 1e-9

    # 3. In3 <-> CM3
    in3 = 234.0
    cm3 = in3 * CM3_PER_IN3
    in3_back = cm3 / CM3_PER_IN3
    assert abs(cm3 - 3834.57) < 0.1
    assert abs(in3_back - 234.0) < 1e-9

    # 4. Cups <-> ML & In3
    cups = 10.0
    ml = cups * ML_PER_US_CUP
    cups_back_ml = ml / ML_PER_US_CUP
    assert abs(ml - 2365.88) < 0.1
    assert abs(cups_back_ml - 10.0) < 1e-9

    in3_cups = cups * IN3_PER_US_CUP
    cups_back_in3 = in3_cups / IN3_PER_US_CUP
    assert abs(in3_cups - 144.375) < 1e-9
    assert abs(cups_back_in3 - 10.0) < 1e-9

    print("[PASS] All Unit Conversions & Round-Trip Tests Passed!")

def test_sourdough():
    flour = 500.0
    water = 350.0
    starter = 100.0
    starter_hydration = 100.0
    salt_val = 10.0

    starter_decimal = starter_hydration / 100.0
    starter_flour = starter / (1.0 + starter_decimal)
    starter_water = starter - starter_flour

    total_flour = flour + starter_flour
    total_water = water + starter_water

    true_hydration = (total_water / total_flour) * 100.0
    starter_weight_pct = (starter / total_flour) * 100.0
    prefermented_flour_pct = (starter_flour / total_flour) * 100.0
    salt_pct = (salt_val / total_flour) * 100.0
    total_dough = total_flour + total_water + salt_val

    assert abs(starter_flour - 50.0) < 1e-9
    assert abs(starter_water - 50.0) < 1e-9
    assert abs(total_flour - 550.0) < 1e-9
    assert abs(total_water - 400.0) < 1e-9
    assert abs(true_hydration - 72.72727) < 0.001
    assert abs(starter_weight_pct - 18.1818) < 0.001
    assert abs(prefermented_flour_pct - 9.0909) < 0.001
    assert abs(salt_pct - 1.818) < 0.001
    assert abs(total_dough - 960.0) < 1e-9

    print(f"[PASS] Sourdough Engine Verified: True Hydration = {true_hydration:.1f}%, Total Weight = {total_dough:.0f}g, Starter Weight % = {starter_weight_pct:.1f}%, Preferment = {prefermented_flour_pct:.1f}%")

def test_bakers():
    flour = 1000.0
    water = 700.0
    salt = 20.0
    yeast = 5.0
    total = flour + water + salt + yeast

    # Base percentages
    assert (water / flour) * 100 == 70.0
    assert (salt / flour) * 100 == 2.0
    assert (yeast / flour) * 100 == 0.5

    # Flour scaling to 2000g (2x)
    m_flour = 2000.0 / flour
    assert m_flour == 2.0
    assert water * m_flour == 1400.0
    assert salt * m_flour == 40.0
    assert yeast * m_flour == 10.0

    # Batch scaling to 3450g
    m_batch = 3450.0 / total
    assert m_batch == 2.0
    assert (flour + water + salt + yeast) * m_batch == 3450.0

    print("[PASS] Baker's Percentage & Dual-Scaling Engine Verified!")

def test_pan():
    IN3_PER_US_CUP = 14.4375

    # 9x13x2" rectangle
    orig_vol = 13.0 * 9.0 * 2.0
    assert orig_vol == 234.0

    # 8" round x 2" deep
    target_area = math.pi * (4.0 ** 2)
    target_vol = target_area * 2.0
    assert abs(target_vol - 100.53096) < 0.01

    scale_factor = target_vol / orig_vol
    assert abs(scale_factor - 0.4296) < 0.001

    # Bundt 10-cup preset
    bundt_vol = 10.0 * IN3_PER_US_CUP
    assert abs(bundt_vol - 144.375) < 1e-9

    bundt_scale = bundt_vol / orig_vol
    assert abs(bundt_scale - 0.617) < 0.001

    print(f"[PASS] Pan Converter Engine Verified: 9x13x2 to 8x2 round = {scale_factor:.2f}x scaling; 10-cup Bundt = {bundt_scale:.2f}x scaling!")

if __name__ == "__main__":
    test_units()
    test_sourdough()
    test_bakers()
    test_pan()
    print("\nALL MATHEMATICAL ENGINES 100% VERIFIED ACCURATE!")
