/* --- CONFIG & DATA --- */
const translations = {
    ar: {
        nav_home: "الرئيسية", nav_ai: "الذكاء الاصطناعي", nav_poly: "تصحيح المضلع", 
        nav_area_coord: "حساب المساحة بالإحداثيات",
        nav_ang: "محول الزوايا", nav_units: "محول الوحدات",
        nav_geodetic: "محول الإحداثيات", nav_stadia: "حاسبة المسافة", 
        nav_leveling: "جدول التسوية", nav_physics: "المختبر الفيزيائي",
        nav_err_s: "أخطاء (بسيطة)", nav_err_w: "أخطاء (وزنية)", nav_grid: "شبكة المناسيب", 
        nav_conc: "خرسانة", nav_plaster: "قصارة",
        nav_brick: "طوب", nav_tile: "بلاط", nav_profile: "المستخدم", nav_g2d: "أشكال 2D", nav_g3d: "مجسمات 3D",
        nav_dev: "المطور",
        sec_general: "عام", sec_survey: "مساحة", sec_const: "إنشاءات", sec_geo: "هندسة متكاملة",
        welcome_msg: "أقوى أداة للحسابات الهندسية، المساحية، والإنشائية.",
        ai_title: "المساعد الذكي", ai_desc: "تحليل البيانات الهندسية بالذكاء الاصطناعي", soon: "قريباً",
        poly_title: "تصحيح المضلع (Bowditch)", 
        tbl_pt: "النقطة", tbl_ang_obs: "الزاوية المرصودة", tbl_len: "الطول (m)", tbl_act: "حذف", 
        tbl_details: "جدول الأرصاد والتصحيحات",
        graph_poly: "رسم المضلع المصحح",
        btn_add: "إضافة ضلع", btn_calc: "احسب", btn_convert: "تحويل", btn_save: "حفظ الإعدادات", 
        btn_back: "عودة", btn_gen_table: "إنشاء الجدول",
        btn_add_pt: "إضافة نقطة", btn_calc_draw: "حساب المساحة والمحيط",
        lbl_ang_err: "خطأ القفل الزاوي", lbl_lin_err: "خطأ القفل الخطي", 
        lbl_val: "القيمة", lbl_sys: "النظام", lbl_readings: "القراءات", lbl_weights: "الأوزان",
        lbl_area: "المساحة (m²)", lbl_thick: "السمك (cm)", lbl_ratio: "نسبة الخلط",
        lbl_wall_area: "مساحة الحائط (m²)", lbl_len: "الطول (L)", lbl_height: "الارتفاع (H)",
        lbl_tile_area: "مساحة البلاط (m²)", lbl_tile_len: "طول البلاطة (cm)", lbl_tile_wid: "عرض البلاطة (cm)",
        lbl_mortar_thick: "سمك المونة (cm)", lbl_adas_thick: "سمك العدسية (cm)",
        lbl_start_e: "إحداثيات البداية (Easting X)", lbl_start_n: "إحداثيات البداية (Northing Y)", 
        lbl_unit: "وحدة الزوايا", lbl_start_az: "انحراف الضلع الأول", lbl_initial_bm: "منسوب أول نقطة",
        lbl_readings_comma: "القراءات (افصل بفاصلة ,)",
        lbl_rows: "عدد الصفوف", lbl_cols: "عدد الأعمدة", lbl_grid_dist: "المسافة (m)", 
        lbl_design_level: "منسوب التسوية", lbl_enter_levels: "أدخل مناسيب النقاط", 
        res_avg_level: "متوسط المنسوب", res_cut: "حجم الحفر (Cut)", res_fill: "حجم الردم (Fill)", 
        res_net: "الصافي (Net)", graph_grid: "مخطط الشبكة",
        tbl_grid_details: "تفاصيل الحسابات", tbl_cell: "الخلية", tbl_avg_h: "متوسط المنسوب", 
        tbl_diff: "الفرق (Diff)", tbl_vol_cut: "حفر (Cut)", tbl_vol_fill: "ردم (Fill)",
        res_cem_bags: "أسمنت (أكياس)", res_sand_m3: "رمل (m³)", res_brick_count: "عدد الطوب المطلوب", 
        res_tile_pcs: "عدد البلاط", res_adas_m3: "عدسية (m³)",
        lbl_perim: "المحيط", lbl_vol: "الحجم", lbl_surf: "المساحة السطحية", 
        profile_title: "بيانات المستخدم", lbl_name: "الاسم", lbl_job: "المسمى الوظيفي",
        lbl_email: "البريد الإلكتروني", lbl_phone: "رقم الهاتف", lbl_address: "العنوان",
        dev_title: "معلومات المطور", dev_subtitle: "مطور تطبيقات الهندسة والمساحة", 
        dev_desc: "تطوير حلول هندسية مبتكرة لتبسيط العمليات الحسابية المعقدة",
        step_mean: "المتوسط", step_std: "الانحراف المعياري", step_stderr: "الخطأ المعياري",
        step_wet: "الحجم الرطب", step_dry: "الحجم الجاف", step_cem: "الأسمنت", step_sand: "الرمل",
        step_brick_area: "مساحة الطوبة", step_total: "الإجمالي",
        val_deg: "درجات عشرية", val_dms: "DMS", val_rad: "راديان", val_grad: "جراد",
        tbl_azimuth: "الانحراف", tbl_corr_ang: "الزاوية المصححة", tbl_dx: "ΔX", tbl_dy: "ΔY", 
        tbl_corr_x: "Corr X", tbl_corr_y: "Corr Y", tbl_final_e: "Final E", tbl_final_n: "Final N", 
        tbl_total: "المجموع",
        area_desc: "أدخل إحداثيات النقاط (X, Y) لحساب المساحة والمحيط بدقة ورسم الشكل.",
        tbl_east: "Easting (X)", tbl_north: "Northing (Y)",
        lbl_area_m2: "المساحة (متر مربع)", lbl_area_perimeter: "المحيط (متر)",
        graph_area: "رسم قطعة الأرض"
    },
    en: {
        nav_home: "Home", nav_ai: "AI Assistant", nav_poly: "Polygon Adjust", 
        nav_area_coord: "Area by Coordinates",
        nav_ang: "Angle Converter", nav_units: "Unit Converter",
        nav_geodetic: "Geodetic Converter", nav_stadia: "Distance Calculator", 
        nav_leveling: "Leveling Table", nav_physics: "Physics Lab",
        nav_err_s: "Simple Errors", nav_err_w: "Weighted Errors", nav_grid: "Grid Leveling", 
        nav_conc: "Concrete", nav_plaster: "Plastering",
        nav_brick: "Bricks", nav_tile: "Tiles", nav_profile: "User Profile", 
        nav_g2d: "2D Shapes", nav_g3d: "3D Solids",
        nav_dev: "Developer",
        sec_general: "General", sec_survey: "Surveying", sec_const: "Construction", 
        sec_geo: "Integrated Geometry",
        welcome_msg: "Ultimate tool for engineering, surveying, and construction calculations.",
        ai_title: "AI Assistant", ai_desc: "Engineering data analysis with AI", soon: "Coming Soon",
        poly_title: "Polygon Correction (Bowditch)", 
        tbl_pt: "Point", tbl_ang_obs: "Observed Angle", tbl_len: "Length (m)", tbl_act: "Delete", 
        tbl_details: "Traverse Table & Corrections",
        graph_poly: "Corrected Polygon Plot",
        btn_add: "Add Leg", btn_calc: "Calculate", btn_convert: "Convert", btn_save: "Save Settings", 
        btn_back: "Back", btn_gen_table: "Generate Table",
        btn_add_pt: "Add Point", btn_calc_draw: "Calculate Area & Perimeter",
        lbl_ang_err: "Angular Misclosure", lbl_lin_err: "Linear Misclosure", 
        lbl_val: "Value", lbl_sys: "System", lbl_readings: "Readings", lbl_weights: "Weights",
        lbl_area: "Area (m²)", lbl_thick: "Thickness (cm)", lbl_ratio: "Mix Ratio",
        lbl_wall_area: "Wall Area (m²)", lbl_len: "Length (L)", lbl_height: "Height (H)",
        lbl_tile_area: "Tile Area (m²)", lbl_tile_len: "Tile Length (cm)", lbl_tile_wid: "Tile Width (cm)",
        lbl_mortar_thick: "Mortar Thickness (cm)", lbl_adas_thick: "Bedding Thickness (cm)",
        lbl_start_e: "Start Easting (X)", lbl_start_n: "Start Northing (Y)", lbl_unit: "Angle Unit", 
        lbl_start_az: "Start Azimuth", lbl_initial_bm: "Initial BM Level",
        lbl_readings_comma: "Readings (comma separated)",
        lbl_rows: "Rows", lbl_cols: "Columns", lbl_grid_dist: "Distance (m)", 
        lbl_design_level: "Design Level", lbl_enter_levels: "Enter Point Levels", 
        res_avg_level: "Avg Level", res_cut: "Cut Volume", res_fill: "Fill Volume", 
        res_net: "Net Volume", graph_grid: "Grid Plot",
        tbl_grid_details: "Calculation Details", tbl_cell: "Cell", tbl_avg_h: "Avg Height", 
        tbl_diff: "Diff", tbl_vol_cut: "Cut", tbl_vol_fill: "Fill",
        res_cem_bags: "Cement (Bags)", res_sand_m3: "Sand (m³)", res_brick_count: "Required Bricks", 
        res_tile_pcs: "Tile Count", res_adas_m3: "Bedding (m³)",
        lbl_perim: "Perimeter", lbl_vol: "Volume", lbl_surf: "Surface Area", 
        profile_title: "User Settings", lbl_name: "Name", lbl_job: "Job Title",
        lbl_email: "Email", lbl_phone: "Phone Number", lbl_address: "Address",
        dev_title: "Developer Info", dev_subtitle: "Engineering & Surveying Apps Developer", 
        dev_desc: "Developing innovative engineering solutions to simplify complex calculations",
        step_mean: "Mean", step_std: "Std Deviation", step_stderr: "Std Error",
        step_wet: "Wet Volume", step_dry: "Dry Volume", step_cem: "Cement", step_sand: "Sand",
        step_brick_area: "Brick Area", step_total: "Total",
        val_deg: "Decimal Deg", val_dms: "DMS", val_rad: "Radians", val_grad: "Gradians",
        tbl_azimuth: "Azimuth", tbl_corr_ang: "Corr. Ang", tbl_dx: "ΔX", tbl_dy: "ΔY", 
        tbl_corr_x: "Corr X", tbl_corr_y: "Corr Y", tbl_final_e: "Final E", tbl_final_n: "Final N", 
        tbl_total: "Total",
        area_desc: "Enter point coordinates (X, Y) to calculate accurate area and perimeter and plot the shape.",
        tbl_east: "Easting (X)", tbl_north: "Northing (Y)",
        lbl_area_m2: "Area (Square Meters)", lbl_area_perimeter: "Perimeter (Meters)",
        graph_area: "Plot"
    }
};

let curLang = 'ar';
let polyRows = 1;
let areaRows = 1;
let globalPolyData = [];
let globalAreaData = [];
let currentFontSize = 16;

function t(key) { return translations[curLang][key] || key; }

/* --- CORE FUNCTIONS --- */
function init() {
    addPolyRow(); addPolyRow(); addPolyRow(); addPolyRow();
    addAreaRow(); addAreaRow(); addAreaRow(); addAreaRow();
    loadProfile();
    updateText();
    buildGeoMenus();
    
    // تهيئة المحول الجيوديسي
    proj4.defs("JTM", "+proj=tmerc +lat_0=0 +lon_0=37 +k=0.9998 +x_0=500000 +y_0=-3000000 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs");
    proj4.defs("CASSINI", "+proj=cass +lat_0=31.73409694444445 +lon_0=35.21208055555556 +x_0=170251.603 +y_0=1126867.909 +a=6378300.789 +b=6356566.435 +towgs84=-275.722,274.987,-322.648,-6.2748,-1.1425,-5.2607,3.5651 +units=m +no_defs");
    proj4.defs("WGS84", "+proj=longlat +datum=WGS84 +no_defs");
    
    geo_updateLabels();
    unit_convert();
    phys_filterLaws('mechanics');
}

function resizeFont(dir) {
    currentFontSize += dir;
    if(currentFontSize < 12) currentFontSize = 12;
    if(currentFontSize > 24) currentFontSize = 24;
    document.documentElement.style.setProperty('--base-font', currentFontSize + 'px');
}

function nav(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const btn = [...document.querySelectorAll('.nav-btn')].find(b => b.getAttribute('onclick') === `nav('${pageId}')`);
    if(btn) btn.classList.add('active');

    if(window.innerWidth <= 768) document.getElementById('sidebar').classList.remove('active');
}

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('active'); }
function toggleTheme() { document.body.classList.toggle('light-mode'); }
function toggleLang() {
    curLang = curLang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = curLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = curLang;
    updateText();
    if(!document.getElementById('g2d-menu').classList.contains('hidden')) buildGeoMenus();
}

function updateText() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if(translations[curLang][k]) el.innerText = translations[curLang][k];
    });
}

/* --- USER PROFILE LOGIC --- */
function saveProfile() {
    const name = document.getElementById('user-name').value;
    const job = document.getElementById('user-job').value;
    const email = document.getElementById('user-email').value;
    const phone = document.getElementById('user-phone').value;
    const address = document.getElementById('user-address').value;
    
    localStorage.setItem('shb_user', JSON.stringify({ name, job, email, phone, address }));
    loadProfile();
    alert(curLang === 'ar' ? 'تم حفظ البيانات بنجاح' : 'Settings saved successfully');
}

function loadProfile() {
    const data = JSON.parse(localStorage.getItem('shb_user'));
    if(data) {
        document.getElementById('user-name').value = data.name || '';
        document.getElementById('user-job').value = data.job || '';
        document.getElementById('user-email').value = data.email || '';
        document.getElementById('user-phone').value = data.phone || '';
        document.getElementById('user-address').value = data.address || '';
        
        document.getElementById('header-username').innerText = data.name || 'Guest';
        document.getElementById('welcome-user-msg').innerText = (curLang === 'ar' ? 'مرحباً بك، ' : 'Welcome, ') + (data.name || '');
    }
}

function createStep(title, formula, sub, res) {
    return `<div class="step-item"><div class="step-title">${title}</div><div><span class="step-formula">${formula}</span></div><div style="color:var(--text-muted); font-size:0.85em;">Sub: ${sub}</div><div style="font-weight:bold; color:var(--primary);">= ${res}</div></div>`;
}

/* --- 1. POLYGON LOGIC --- */
function addPolyRow() {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${polyRows++}</td><td><input type="text" class="p-ang form-control" placeholder="Value"></td><td><input type="number" class="p-dist form-control" step="0.001"></td><td><button class="btn btn-danger btn-sm" onclick="this.closest('tr').remove()"><i class="fa-solid fa-trash"></i></button></td>`;
    document.querySelector('#polyTable tbody').appendChild(tr);
}

function calcPolygon() {
    const unit = document.getElementById('poly-unit').value;
    let angsRaw = [...document.querySelectorAll('.p-ang')].map(i => i.value);
    const dists = [...document.querySelectorAll('.p-dist')].map(i => parseFloat(i.value));
    const startE = parseFloat(document.getElementById('start-E').value) || 1000;
    const startN = parseFloat(document.getElementById('start-N').value) || 1000;
    let startAzVal = document.getElementById('start-Az').value || "0";
    if (dists.includes(NaN)) return alert(curLang==='ar'?"الرجاء ملء جميع المسافات":"Please fill all distances");
    const toDeg = (val) => {
        if (unit === 'dms') {
            let s = String(val).trim();
            let parts = s.split(/[^\d.]+/).filter(x => x).map(parseFloat);
            let d = parts[0] || 0, m = parts[1] || 0, sec = parts[2] || 0;
            return d + m/60 + sec/3600;
        }
        let v = parseFloat(val);
        if(isNaN(v)) return 0;
        if(unit === 'grad') return v * 0.9;
        if(unit === 'rad') return v * 180 / Math.PI;
        return v;
    };

    const angs = angsRaw.map(toDeg);
    let startAz = toDeg(startAzVal);

    const n = angs.length;
    const sumAng = angs.reduce((a, b) => a + b, 0);
    const theoSum = (n - 2) * 180;
    const angErr = sumAng - theoSum;
    const angCorrPerUnit = -angErr / n;
    let correctedAngs = [], azimuths = [], dE_raw = [], dN_raw = [];
    let sumL = 0, sumDeltaE = 0, sumDeltaN = 0;

    for(let i=0; i<n; i++) correctedAngs.push(angs[i] + angCorrPerUnit);
    let az = startAz;
    azimuths.push(az);
    for(let i=0; i<n; i++) {
        let rad = az * Math.PI / 180;
        let de = dists[i] * Math.sin(rad);
        let dn = dists[i] * Math.cos(rad);
        dE_raw.push(de); dN_raw.push(dn);
        sumL += dists[i]; sumDeltaE += de;
        sumDeltaN += dn;
        let nextAngleIndex = (i + 1) % n;
        az = (az + 180 - correctedAngs[nextAngleIndex]) % 360;
        while(az < 0) az += 360;
        if(i < n-1) azimuths.push(az);
    }

    const errE = sumDeltaE;
    const errN = sumDeltaN;
    const linErr = Math.sqrt(errE**2 + errN**2);

    let currentE = startE, currentN = startN;
    let drawPoints = [{x: currentE, y: currentN, id: 1}];
    globalPolyData = [];
    globalPolyData.push({id: 1, x: currentE, y: currentN});
    let tableHTML = `<table><thead><tr><th>${t('tbl_pt')}</th><th>${t('tbl_ang_obs')}</th><th>${t('tbl_corr_ang')}</th><th>${t('tbl_azimuth')}</th><th>${t('tbl_len')}</th><th dir="ltr">${t('tbl_dx')}</th><th dir="ltr">${t('tbl_dy')}</th><th>${t('tbl_corr_x')}</th><th>${t('tbl_corr_y')}</th><th style="background:rgba(16, 185, 129, 0.1)">${t('tbl_final_e')}</th><th style="background:rgba(16, 185, 129, 0.1)">${t('tbl_final_n')}</th></tr></thead><tbody><tr><td><b>1 (Start)</b></td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td><b>${startE.toFixed(3)}</b></td><td><b>${startN.toFixed(3)}</b></td></tr>`;
    let totalLen = 0, totalDE = 0, totalDN = 0;
    for(let i=0; i<n; i++) {
        let ce = - (dists[i] / sumL) * errE;
        let cn = - (dists[i] / sumL) * errN;
        let finalDe = dE_raw[i] + ce;
        let finalDn = dN_raw[i] + cn;
        currentE += finalDe;
        currentN += finalDn;
        totalLen += dists[i];
        totalDE += dE_raw[i];
        totalDN += dN_raw[i];

        let ptName = (i + 2) > n ? 1 : (i + 2);
        if(i < n-1) { 
           drawPoints.push({x: currentE, y: currentN, id: ptName});
           globalPolyData.push({id: ptName, x: currentE, y: currentN});
        } else {
            drawPoints.push({x: currentE, y: currentN, id: ptName});
        }

        let dispAng = unit === 'dms' ? angsRaw[i] : parseFloat(angsRaw[i]).toFixed(4);

        tableHTML += `<tr><td>${ptName}</td><td>${dispAng}</td><td style="color:${angCorrPerUnit>0?'var(--success)':'var(--danger)'}">${correctedAngs[i].toFixed(4)}°</td><td>${azimuths[i] ? azimuths[i].toFixed(3) : '-'}°</td><td>${dists[i].toFixed(3)}</td><td>${dE_raw[i].toFixed(3)}</td><td>${dN_raw[i].toFixed(3)}</td><td style="color:var(--danger); font-size:0.85em">${ce.toFixed(4)}</td><td style="color:var(--danger); font-size:0.85em">${cn.toFixed(4)}</td><td><b>${currentE.toFixed(3)}</b></td><td><b>${currentN.toFixed(3)}</b></td></tr>`;
    }

    tableHTML += `</tbody><tfoot><tr><td>${t('tbl_total')}</td><td>-</td><td>-</td><td>-</td><td>${totalLen.toFixed(3)}</td><td dir="ltr">${totalDE.toFixed(3)}</td><td dir="ltr">${totalDN.toFixed(3)}</td><td>-</td><td>-</td><td>-</td><td>-</td></tr></tfoot></table>`;
    
    document.getElementById('poly-sum-ang').innerText = sumAng.toFixed(4) + "°";
    document.getElementById('poly-ang-err').innerText = angErr.toFixed(4) + "°";
    document.getElementById('poly-total-len').innerText = sumL.toFixed(3) + "m";
    document.getElementById('poly-lin-err').innerText = linErr.toFixed(4) + "m";
    document.getElementById('poly-err-e').innerText = errE.toFixed(4) + "m";
    document.getElementById('poly-err-n').innerText = errN.toFixed(4) + "m";
    
    document.getElementById('poly-detail-table').innerHTML = tableHTML;
    drawCanvas('polyCanvas', drawPoints);
    document.getElementById('poly-res').classList.remove('hidden');
}

/* --- MODIFIED: AREA BY COORDINATES LOGIC (AREA & PERIMETER ONLY) --- */
function addAreaRow() {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${areaRows++}</td>
    <td><input type="number" class="area-x form-control" step="0.001" placeholder="X"></td>
    <td><input type="number" class="area-y form-control" step="0.001" placeholder="Y"></td>
    <td><button class="btn btn-danger btn-sm" onclick="this.closest('tr').remove()"><i class="fa-solid fa-trash"></i></button></td>`;
    document.querySelector('#areaTable tbody').appendChild(tr);
}

function calcAreaCoord() {
    const xs = [...document.querySelectorAll('.area-x')].map(i => parseFloat(i.value));
    const ys = [...document.querySelectorAll('.area-y')].map(i => parseFloat(i.value));
    
    const n = xs.length;
    if(n < 3) return alert(curLang==='ar' ? "يرجى إدخال 3 نقاط على الأقل" : "Please enter at least 3 points");
    if(xs.includes(NaN) || ys.includes(NaN)) return alert(curLang==='ar' ? "يرجى ملء جميع القيم" : "Please fill all values");

    let sum1 = 0;
    let sum2 = 0;
    let perimeter = 0;
    globalAreaData = [];

    for(let i = 0; i < n; i++) {
        globalAreaData.push({ id: i+1, x: xs[i], y: ys[i] });
        let next = (i + 1) % n;
        
        // حساب المساحة باستخدام طريقة الإحداثيات
        sum1 += xs[i] * ys[next];
        sum2 += ys[i] * xs[next];
        
        // حساب المسافة بين النقطتين للحصول على المحيط
        const dx = xs[next] - xs[i];
        const dy = ys[next] - ys[i];
        const distance = Math.sqrt(dx*dx + dy*dy);
        perimeter += distance;
    }

    const area = Math.abs(sum1 - sum2) / 2;

    document.getElementById('res-area-m2').innerText = area.toFixed(3);
    document.getElementById('res-area-perimeter').innerText = perimeter.toFixed(3);

    document.getElementById('area-res').classList.remove('hidden');
    
    let drawPoints = [...globalAreaData];
    drawPoints.push(globalAreaData[0]); // إغلاق الشكل للرسم
    drawCanvas('areaCanvas', drawPoints);
}

function exportAreaExcel() {
    if(!globalAreaData.length) return alert("Please calculate first.");
    let csv = "PointID,Easting,Northing\n";
    globalAreaData.forEach(p => { csv += `${p.id},${p.x.toFixed(4)},${p.y.toFixed(4)}\n`; });
    
    // إضافة المساحة والمحيط في نهاية الملف
    const area = document.getElementById('res-area-m2').innerText;
    const perimeter = document.getElementById('res-area-perimeter').innerText;
    csv += `\nArea (m²),${area}\n`;
    csv += `Perimeter (m),${perimeter}\n`;
    
    downloadFile(csv, "Area_Coordinates.csv", "text/csv");
}

/* --- EXPORT --- */
function downloadFile(content, fileName, mimeType) {
    const a = document.createElement('a');
    const blob = new Blob([content], {type: mimeType});
    const url = URL.createObjectURL(blob);
    a.setAttribute('href', url);
    a.setAttribute('download', fileName);
    a.click();
}
function exportExcel() {
    if(!globalPolyData.length) return alert("Please calculate first.");
    let csv = "PointID,Easting,Northing,Elevation\n";
    globalPolyData.forEach(p => { csv += `${p.id},${p.x.toFixed(4)},${p.y.toFixed(4)},0\n`; });
    downloadFile(csv, "Polygon_Results.csv", "text/csv");
}
function exportCAD() {
    if(!globalPolyData.length) return alert("Please calculate first.");
    let scr = "_PLINE\n";
    globalPolyData.forEach(p => { scr += `${p.x.toFixed(4)},${p.y.toFixed(4)}\n`; });
    scr += globalPolyData[0].x.toFixed(4) + "," + globalPolyData[0].y.toFixed(4) + "\n\n";
    downloadFile(scr, "Polygon_Draw.scr", "text/plain");
}
function exportGIS() {
    if(!globalPolyData.length) return alert("Please calculate first.");
    let txt = "Station,X,Y,Z\n";
    globalPolyData.forEach(p => { txt += `PT${p.id},${p.x.toFixed(4)},${p.y.toFixed(4)},0\n`; });
    downloadFile(txt, "Polygon_GIS.txt", "text/plain");
}

/* --- 2. ANGLE CONVERTER --- */
function calcAngles() {
    const valStr = document.getElementById('ang-val').value;
    const type = document.getElementById('ang-type').value;
    if(!valStr) return;
    let deg = 0;
    if(type === 'dms') {
        const parts = valStr.split(/[^\d.]+/).filter(x=>x).map(parseFloat);
        deg = (parts[0]||0) + (parts[1]||0)/60 + (parts[2]||0)/3600;
    } else if (type === 'rad') { deg = parseFloat(valStr) * 180 / Math.PI;
    } else if (type === 'grad') { deg = parseFloat(valStr) * 0.9;
    } else { deg = parseFloat(valStr);
    }

    const rad = deg * Math.PI / 180;
    const radPi = rad / Math.PI;
    const grad = deg / 0.9;
    const d = Math.floor(deg);
    const m = Math.floor((deg - d) * 60);
    const s = ((deg - d) * 60 - m) * 60;
    const dms = `${d}° ${m}' ${s.toFixed(2)}"`;

    document.getElementById('res-deg').innerText = deg.toFixed(6);
    document.getElementById('res-dms').innerText = dms;
    document.getElementById('res-rad').innerText = rad.toFixed(6);
    document.getElementById('res-rad-pi').innerText = radPi.toFixed(4) + "π";
    document.getElementById('res-grad').innerText = grad.toFixed(4);
    document.getElementById('ang-res').classList.remove('hidden');
}

/* --- 3. SIMPLE ERRORS --- */
function calcSimpleErrors() {
    const raw = document.getElementById('sim-reads').value;
    const r = raw.split(',').map(x => parseFloat(x)).filter(x => !isNaN(x));
    if(r.length < 2) return alert(curLang==='ar'?"الرجاء إدخال قراءتين على الأقل":"Enter at least 2 readings");
    const n = r.length;
    const sum = r.reduce((a,b)=>a+b, 0);
    const mean = sum / n;
    let sumV = 0, sumVV = 0, tableRows = "";
    r.forEach((val, i) => {
        const v = val - mean;
        const vv = v * v;
        sumV += v; sumVV += vv;
        tableRows += `<tr><td>${i + 1}</td><td>${val.toFixed(4)}</td><td style="direction:ltr">${v.toFixed(5)}</td><td style="direction:ltr">${vv.toFixed(6)}</td></tr>`;
    });
    const std = Math.sqrt(sumVV / (n - 1));
    const stderr = std / Math.sqrt(n);
    const tableHTML = `<table><thead><tr><th>#</th><th>x</th><th>v</th><th>v²</th></tr></thead><tbody>${tableRows}</tbody><tfoot><tr><td>Sum</td><td>${sum.toFixed(3)}</td><td>${Math.round(sumV)}</td><td>${sumVV.toFixed(6)}</td></tr></tfoot></table>`;
    let s = createStep(t('step_mean'), "x̄ = Σx / n", `${sum.toFixed(3)} / ${n}`, mean.toFixed(4));
    s += createStep(t('step_std'), "σ = ±√(Σv² / (n-1))", `√(${sumVV.toFixed(5)} / ${n-1})`, std.toFixed(4));
    s += createStep(t('step_stderr'), "σ_m = ± σ / √n", `${std.toFixed(4)} / √${n}`, stderr.toFixed(4));
    
    document.getElementById('sim-mean').innerText = mean.toFixed(4);
    document.getElementById('sim-std').innerText = std.toFixed(4);
    document.getElementById('sim-stderr').innerText = stderr.toFixed(4);
    document.getElementById('sim-table-container').innerHTML = tableHTML;
    document.getElementById('sim-steps').innerHTML = s;
    document.getElementById('sim-res').classList.remove('hidden');
}

/* --- 4. WEIGHTED ERRORS --- */
function calcWeightedErrors() {
    const rawR = document.getElementById('wei-reads').value;
    const rawW = document.getElementById('wei-vals').value;
    const r = rawR.split(',').map(x=>parseFloat(x)).filter(x=>!isNaN(x));
    let w = rawW ? rawW.split(',').map(x=>parseFloat(x)).filter(x=>!isNaN(x)) : r.map(()=>1);
    if(r.length === 0) return alert(curLang==='ar'?"الرجاء إدخال قراءات":"Enter readings");
    if(r.length !== w.length) w = r.map(()=>1);

    const sumW = w.reduce((a,b)=>a+b, 0);
    const sumWX = r.reduce((a,x,i) => a + (x * w[i]), 0);
    const wMean = sumWX / sumW;
    let sumWVV = 0, tableRows = "";

    r.forEach((val, i) => {
        const weight = w[i];
        const v = val - wMean;
        const wvv = weight * v * v;
        sumWVV += wvv;
        tableRows += `<tr><td>${i + 1}</td><td>${val.toFixed(4)}</td><td>${weight}</td><td>${(val * weight).toFixed(3)}</td><td style="direction:ltr">${v.toFixed(4)}</td><td style="direction:ltr">${wvv.toFixed(5)}</td></tr>`;
    });
    const n = r.length;
    const stdSurvey = Math.sqrt(sumWVV / (n - 1)); 
    
    const tableHTML = `<table><thead><tr><th>#</th><th>x</th><th>w</th><th>w.x</th><th>v</th><th>w.v²</th></tr></thead><tbody>${tableRows}</tbody><tfoot><tr><td>Sum</td><td>-</td><td>${sumW}</td><td>${sumWX.toFixed(3)}</td><td>-</td><td>${sumWVV.toFixed(5)}</td></tr></tfoot></table>`;
    let s = createStep(t('step_mean'), "x̄_w = Σ(w.x) / Σw", `${sumWX.toFixed(2)} / ${sumW}`, wMean.toFixed(4));
    s += createStep("Std Unit Wt", "S₀ = ±√(Σw.v² / (n - 1))", `√(${sumWVV.toFixed(4)} / ${n-1})`, stdSurvey.toFixed(4));

    document.getElementById('wei-mean').innerText = wMean.toFixed(4);
    document.getElementById('wei-std').innerText = stdSurvey.toFixed(4);
    document.getElementById('wei-table-container').innerHTML = tableHTML;
    document.getElementById('wei-steps').innerHTML = s;
    document.getElementById('wei-res').classList.remove('hidden');
}

/* --- 5. GRID LEVELING --- */
function generateGridInputs() {
    const r = parseInt(document.getElementById('grid-rows').value);
    const c = parseInt(document.getElementById('grid-cols').value);
    if (r < 2 || c < 2) return alert("Min 2x2 grid");
    
    let html = '<table id="grid-inputs-table"><thead><tr><th></th>';
    for(let j=0; j<c; j++) html += `<th>C${j+1}</th>`;
    html += '</tr></thead><tbody>';
    
    for(let i=0; i<r; i++) {
        html += `<tr><td><b>R${i+1}</b></td>`;
        for(let j=0; j<c; j++) {
            html += `<td><input type="number" step="0.01" class="grid-cell form-control" data-r="${i}" data-c="${j}" style="min-width:70px"></td>`;
        }
        html += '</tr>';
    }
    html += '</tbody></table>';
    
    document.getElementById('grid-input-table').innerHTML = html;
    document.getElementById('grid-input-area').style.display = 'block';
    document.getElementById('grid-res').classList.add('hidden');
}

function calcGridLeveling() {
    const rows = parseInt(document.getElementById('grid-rows').value);
    const cols = parseInt(document.getElementById('grid-cols').value);
    const dist = parseFloat(document.getElementById('grid-dist').value);
    const design = parseFloat(document.getElementById('grid-design').value);
    
    const cells = document.querySelectorAll('.grid-cell');
    let data = [];
    let sumLevels = 0;
    let count = 0;
    
    for(let i=0; i<rows; i++) {
        let row = [];
        for(let j=0; j<cols; j++) {
            const input = [...cells].find(el => el.dataset.r == i && el.dataset.c == j);
            const val = parseFloat(input.value) || 0;
            row.push(val);
            sumLevels += val;
            count++;
        }
        data.push(row);
    }
    
    const avgLevel = sumLevels / count;
    
    let totalCut = 0;
    let totalFill = 0;
    const cellArea = dist * dist;
    
    let detailTableHTML = `<table><thead><tr>
        <th>${t('tbl_cell')}</th>
        <th>${t('tbl_avg_h')}</th>
        <th>${t('lbl_design_level')}</th>
        <th dir="ltr">${t('tbl_diff')}</th>
        <th style="color:var(--danger)">${t('tbl_vol_cut')} (m³)</th>
        <th style="color:var(--success)">${t('tbl_vol_fill')} (m³)</th>
    </tr></thead><tbody>`;

    for(let i=0; i<rows-1; i++) {
        for(let j=0; j<cols-1; j++) {
            const h1 = data[i][j];
            const h2 = data[i][j+1];
            const h3 = data[i+1][j];
            const h4 = data[i+1][j+1];
            const avgH = (h1 + h2 + h3 + h4) / 4;
            const diff = avgH - design;
            
            const vol = diff * cellArea;
            let cVol = 0, fVol = 0;

            if(diff > 0) { 
                totalCut += vol;
                cVol = vol;
            } else { 
                totalFill += Math.abs(vol);
                fVol = Math.abs(vol);
            }
            
            detailTableHTML += `<tr>
                <td>R${i+1}-C${j+1}</td>
                <td>${avgH.toFixed(3)}</td>
                <td>${design}</td>
                <td dir="ltr" style="color:${diff>0?'var(--danger)':'var(--success)'}">${diff.toFixed(3)}</td>
                <td>${cVol > 0 ? cVol.toFixed(3) : '-'}</td>
                <td>${fVol > 0 ? fVol.toFixed(3) : '-'}</td>
            </tr>`;
        }
    }
    
    detailTableHTML += `</tbody><tfoot><tr>
        <td>Total</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td style="color:var(--danger)">${totalCut.toFixed(3)}</td>
        <td style="color:var(--success)">${totalFill.toFixed(3)}</td>
    </tr></tfoot></table>`;

    document.getElementById('res-grid-avg').innerText = avgLevel.toFixed(3);
    document.getElementById('res-grid-cut').innerText = totalCut.toFixed(3);
    document.getElementById('res-grid-fill').innerText = totalFill.toFixed(3);
    document.getElementById('res-grid-net').innerText = (totalCut - totalFill).toFixed(3);
    
    document.getElementById('grid-detail-table').innerHTML = detailTableHTML;
    
    document.getElementById('grid-res').classList.remove('hidden');
    drawGridLeveling(rows, cols, data, design);
}

function drawGridLeveling(rows, cols, data, design) {
    const cvs = document.getElementById('gridCanvas');
    const ctx = cvs.getContext('2d');
    const w = cvs.width, h = cvs.height;
    ctx.clearRect(0,0,w,h);
    
    const padding = 40;
    const availW = w - 2*padding;
    const availH = h - 2*padding;
    
    const gapX = availW / (cols - 1);
    const gapY = availH / (rows - 1);
    
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let j=0; j<cols; j++) {
        const x = padding + j*gapX;
        ctx.moveTo(x, padding);
        ctx.lineTo(x, h - padding);
    }
    for(let i=0; i<rows; i++) {
        const y = padding + i*gapY;
        ctx.moveTo(padding, y);
        ctx.lineTo(w - padding, y);
    }
    ctx.stroke();
    
    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            const x = padding + j*gapX;
            const y = padding + i*gapY;
            const val = data[i][j];
            
            const diff = val - design;
            const color = diff > 0 ? '#ef4444' : (diff < 0 ? '#10b981' : '#6366f1');
            
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2*Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
            
            ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-main');
            ctx.font = "12px sans-serif";
            ctx.fillText(val.toFixed(2), x + 8, y - 8);
            
            ctx.fillStyle = color;
            ctx.font = "10px sans-serif";
            const sign = diff > 0 ? '+' : '';
            ctx.fillText(`${sign}${diff.toFixed(2)}`, x + 8, y + 5);
        }
    }
}

/* --- 6. PLASTER & COST --- */
function calcPlaster() {
    const area = parseFloat(document.getElementById('plas-area').value);
    const thick = parseFloat(document.getElementById('plas-thick').value) / 100;
    const ratio = parseFloat(document.getElementById('plas-ratio').value);

    if(!area) return;
    const wetVol = area * thick;
    const dryVol = wetVol * 1.33;
    const sumRatio = 1 + ratio;
    const cementVol = (1/sumRatio) * dryVol;
    const sandVol = (ratio/sumRatio) * dryVol;
    const bags = Math.ceil(cementVol * 28.8);
    
    let s = createStep(t('step_wet'), "Area × Thickness", `${area} × ${thick}`, wetVol.toFixed(3));
    s += createStep(t('step_dry'), "Wet × 1.33", `${wetVol.toFixed(3)} × 1.33`, dryVol.toFixed(3));
    s += createStep(t('step_cem'), "(1/Sum) × Dry × 28.8", `(1/${sumRatio}) × ${dryVol.toFixed(3)} × 28.8`, bags);
    s += createStep(t('step_sand'), "(Ratio/Sum) × Dry", `(${ratio}/${sumRatio}) × ${dryVol.toFixed(3)}`, sandVol.toFixed(3));

    document.getElementById('plas-cem').innerText = bags;
    document.getElementById('plas-sand').innerText = sandVol.toFixed(2);
    document.getElementById('plas-steps').innerHTML = s;
    document.getElementById('plas-res').classList.remove('hidden');
}

/* --- 7. BRICK & COST --- */
function calcBrick() {
    const wallArea = parseFloat(document.getElementById('brk-area').value);
    const bLen = parseFloat(document.getElementById('brk-len').value);
    const bHgt = parseFloat(document.getElementById('brk-hgt').value);

    if(!wallArea || !bLen || !bHgt) return alert(curLang==='ar'?"أدخل البيانات":"Enter Data");
    const L = bLen / 100;
    const H = bHgt / 100;
    const areaOneBrick = L * H;
    const count = Math.ceil(wallArea / areaOneBrick);

    let s = createStep(t('step_brick_area'), "L × H", `${L} × ${H}`, areaOneBrick.toFixed(4));
    s += createStep(t('step_total'), "Wall / BrickArea", `${wallArea} / ${areaOneBrick.toFixed(4)}`, count);

    document.getElementById('brk-count').innerText = count;
    document.getElementById('brk-steps').innerHTML = s;
    document.getElementById('brk-res').classList.remove('hidden');
}

/* --- 8. TILES & COST --- */
function calcTiles() {
    const area = parseFloat(document.getElementById('tile-area').value);
    const tLen = parseFloat(document.getElementById('tile-len').value);
    const tWid = parseFloat(document.getElementById('tile-wid').value);
    const tMortar = parseFloat(document.getElementById('tile-mortar').value);
    const tAdas = parseFloat(document.getElementById('tile-adas').value);
    
    if(!area || !tLen || !tWid) return alert(curLang==='ar'?"أدخل البيانات":"Enter Data");
    
    const lenM = tLen / 100;
    const widM = tWid / 100;
    const oneTileArea = lenM * widM;
    const count = Math.ceil(area / oneTileArea);
    const fillThickness = tAdas / 100;
    const adasiyaVol = area * fillThickness;
    const mortarThickness = tMortar / 100;
    const mortarVol = area * mortarThickness;
    const sandVol = mortarVol;
    const cementForMortar = mortarVol * 7;
    const cementForGrout = area / 30;
    const totalCement = Math.ceil(cementForMortar + cementForGrout);
    
    let s = createStep("Tile Area", "(L/100) × (W/100)", `${lenM} × ${widM}`, oneTileArea.toFixed(3) + " m²");
    s += createStep("Tile Count", "Total Area / Tile Area", `${area} / ${oneTileArea.toFixed(3)}`, count + " Pcs");
    s += createStep("Adasiya Vol", `Area × Thickness (${tAdas}cm)`, `${area} × ${fillThickness}`, adasiyaVol.toFixed(2) + " m³");
    s += createStep("Mortar Vol", `Area × Thickness (${tMortar}cm)`, `${area} × ${mortarThickness}`, mortarVol.toFixed(2) + " m³");
    s += createStep("Cement", "(MortarVol × 7) + Grout", `(${mortarVol.toFixed(2)}×7) + Buffer`, totalCement + " Bags");

    document.getElementById('res-tile-count').innerText = count;
    document.getElementById('res-tile-cement').innerText = totalCement;
    document.getElementById('res-tile-sand').innerText = sandVol.toFixed(2);
    document.getElementById('res-tile-adas').innerText = adasiyaVol.toFixed(2);
    document.getElementById('tile-steps').innerHTML = s;
    document.getElementById('tile-res').classList.remove('hidden');
}

/* --- POLYGON & AREA CANVAS DRAW --- */
function drawCanvas(id, points) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width, canvas.height);
    if(points.length === 0) return;
    const xs = points.map(p=>p.x);
    const ys = points.map(p=>p.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const padding = 50;
    const w = canvas.width - 2*padding;
    const h = canvas.height - 2*padding;
    const scale = Math.min(w/(maxX-minX || 1), h/(maxY-minY || 1));
    
    ctx.beginPath();
    ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 3;
    points.forEach((p, i) => {
        const x = padding + (p.x - minX) * scale;
        const y = canvas.height - padding - (p.y - minY) * scale;
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.stroke();

    if(id === 'areaCanvas') {
        ctx.fillStyle = 'rgba(99, 102, 241, 0.1)';
        ctx.fill();
    }

    points.forEach((p, i) => {
        const x = padding + (p.x - minX) * scale;
        const y = canvas.height - padding - (p.y - minY) * scale;
        
        ctx.beginPath(); 
        
        if (i === 0 || i === points.length - 1) {
            ctx.fillStyle = '#10b981';
            ctx.moveTo(x, y - 8);
            ctx.lineTo(x + 8, y + 8);
            ctx.lineTo(x - 8, y + 8);
            ctx.closePath();
            ctx.fill();
        } else {
            ctx.fillStyle = '#ef4444';
            ctx.arc(x, y, 6, 0, 2*Math.PI); 
            ctx.fill();
        }

        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-main');
        ctx.font = "12px sans-serif"; 
        if(i < points.length - 1 || points[0].id !== p.id) {
             ctx.fillText(`P${p.id || i+1}`, x+8, y-8);
        }
    });
}

/* --- GEOMETRY MODULE --- */
const g2dData = {
    'square': { name_ar: 'مربع', name_en: 'Square', icon: 'fa-regular fa-square', inputs: ['side:s'] },
    'rect': { name_ar: 'مستطيل', name_en: 'Rectangle', icon: 'fa-regular fa-square-full', inputs: ['len:L', 'wid:W'] },
    'circle': { name_ar: 'دائرة', name_en: 'Circle', icon: 'fa-regular fa-circle', inputs: ['rad:r'] },
    'tri-right': { name_ar: 'مثلث قائم', name_en: 'Right Tri', icon: 'fa-solid fa-ruler-triangle', inputs: ['base:b', 'height:h'] },
    'tri-equi': { name_ar: 'مثلث متساوي الأضلاع', name_en: 'Equilateral Tri', icon: 'fa-solid fa-caret-up', inputs: ['side:s'] },
    'tri-iso': { name_ar: 'مثلث متساوي الساقين', name_en: 'Isosceles Tri', icon: 'fa-solid fa-mountain', inputs: ['base:b', 'side:s'] },
    'para': { name_ar: 'متوازي أضلاع', name_en: 'Parallelogram', icon: 'fa-solid fa-vector-square', inputs: ['base:b', 'height:h', 'slope:s'] },
    'sector': { name_ar: 'قطاع دائري', name_en: 'Sector', icon: 'fa-solid fa-chart-pie', inputs: ['rad:r', 'angle:deg'] },
    'parabola': { name_ar: 'قطع مكافئ', name_en: 'Parabola', icon: 'fa-solid fa-bezier-curve', inputs: ['width:w', 'height:h'] },
    'polygon': { name_ar: 'مضلع منتظم', name_en: 'Regular Polygon', icon: 'fa-solid fa-stop', inputs: ['side:s', 'count:n'] }
};
const g3dData = {
    'cube': { name_ar: 'مكعب', name_en: 'Cube', icon: 'fa-solid fa-cube', inputs: ['side:s'] },
    'box': { name_ar: 'متوازي مستطيلات', name_en: 'Box', icon: 'fa-solid fa-cubes', inputs: ['len:L', 'wid:W', 'hgt:H'] },
    'cyl': { name_ar: 'أسطوانة', name_en: 'Cylinder', icon: 'fa-solid fa-database', inputs: ['rad:r', 'hgt:h'] },
    'cone': { name_ar: 'مخروط', name_en: 'Cone', icon: 'fa-solid fa-filter', inputs: ['rad:r', 'hgt:h'] },
    'sphere': { name_ar: 'كرة', name_en: 'Sphere', icon: 'fa-solid fa-basketball', inputs: ['rad:r'] },
    'pyramid': { name_ar: 'هرم رباعي', name_en: 'Pyramid', icon: 'fa-solid fa-landmark', inputs: ['base:b', 'hgt:h'] }
};
let currentShape2D = null;
let currentShape3D = null;

function buildGeoMenus() {
    const m2 = document.getElementById('g2d-menu');
    m2.innerHTML = '';
    for(let k in g2dData) {
        const name = curLang==='ar' ? g2dData[k].name_ar : g2dData[k].name_en;
        m2.innerHTML += `<div class="shape-card" onclick="selectShape2D('${k}')"><i class="${g2dData[k].icon}"></i><div class="shape-name">${name}</div></div>`;
    }
    const m3 = document.getElementById('g3d-menu');
    m3.innerHTML = '';
    for(let k in g3dData) {
        const name = curLang==='ar' ? g3dData[k].name_ar : g3dData[k].name_en;
        m3.innerHTML += `<div class="shape-card" onclick="selectShape3D('${k}')"><i class="${g3dData[k].icon}"></i><div class="shape-name">${name}</div></div>`;
    }
}

function selectShape2D(key) {
    currentShape2D = key;
    const s = g2dData[key];
    document.getElementById('g2d-menu').classList.add('hidden');
    document.getElementById('g2d-workspace').classList.remove('hidden');
    document.getElementById('g2d-title').innerText = (curLang==='ar'?s.name_ar:s.name_en);
    
    const inputsDiv = document.getElementById('g2d-inputs');
    inputsDiv.innerHTML = '';
    s.inputs.forEach(i => {
        const [id, label] = i.split(':');
        inputsDiv.innerHTML += `<div class="form-group"><label>${label}</label><input type="number" id="i2d-${id}" class="form-control" step="0.01"></div>`;
    });
    document.getElementById('g2d-res').classList.add('hidden');
}

function showG2DMenu() {
    document.getElementById('g2d-workspace').classList.add('hidden');
    document.getElementById('g2d-menu').classList.remove('hidden');
    document.getElementById('g2d-res').classList.add('hidden');
}

function calcG2D() {
    if(!currentShape2D) return;
    const key = currentShape2D;
    const get = (id) => parseFloat(document.getElementById('i2d-'+id).value) || 0;
    let area = 0, perim = 0, hyp = 0;
    let showHyp = false;
    if(key === 'square') { const s = get('side'); area = s*s; perim = 4*s; hyp = s*Math.sqrt(2); showHyp=true;
    }
    else if(key === 'rect') { const l = get('len'), w = get('wid');
    area = l*w; perim = 2*(l+w); hyp = Math.sqrt(l*l+w*w); showHyp=true;
    }
    else if(key === 'circle') { const r = get('rad');
    area = Math.PI*r*r; perim = 2*Math.PI*r; }
    else if(key === 'tri-right') { const b=get('base'), h=get('height');
    area = 0.5*b*h; hyp = Math.sqrt(b*b+h*h); perim = b+h+hyp; showHyp=true;
    }
    else if(key === 'tri-equi') { const s=get('side');
    area = (Math.sqrt(3)/4)*s*s; perim = 3*s; }
    else if(key === 'tri-iso') { const b=get('base'), s=get('side');
    const h = Math.sqrt(s*s - (b/2)**2); area = 0.5*b*h; perim = b+2*s;
    }
    else if(key === 'para') { const b=get('base'), h=get('height'), s=get('slope');
    area = b*h; perim = 2*(b+s); }
    else if(key === 'sector') { const r=get('rad'), a=get('angle');
    area = (a/360)*Math.PI*r*r; perim = (a/360)*2*Math.PI*r + 2*r; }
    else if(key === 'parabola') { const w=get('width'), h=get('height');
    area = (2/3)*w*h; perim = w + (8*h*h)/(3*w); }
    else if(key === 'polygon') { const s=get('side'), n=get('count');
    area = (n*s*s)/(4*Math.tan(Math.PI/n)); perim = n*s; }

    document.getElementById('res-g2d-area').innerText = area.toFixed(3);
    document.getElementById('res-g2d-perim').innerText = perim.toFixed(3);
    
    const hypCard = document.getElementById('card-g2d-hyp');
    if(showHyp) {
        hypCard.classList.remove('hidden');
        document.getElementById('res-g2d-hyp').innerText = hyp.toFixed(3);
        document.getElementById('lbl-g2d-hyp').innerText = key === 'circle' ? 'Diameter' : 'Hypotenuse';
    } else { hypCard.classList.add('hidden');
    }
    
    document.getElementById('g2d-res').classList.remove('hidden');
    drawG2D(key);
}

function drawG2D(key) {
    const cvs = document.getElementById('canvas2d');
    const ctx = cvs.getContext('2d');
    const w = cvs.width, h = cvs.height;
    ctx.clearRect(0,0,w,h);
    const cx = w/2, cy = h/2;
    ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 3; ctx.fillStyle = 'rgba(99, 102, 241, 0.1)';
    ctx.beginPath();
    if(key === 'square') ctx.rect(cx-100, cy-100, 200, 200);
    else if(key === 'rect') ctx.rect(cx-150, cy-80, 300, 160);
    else if(key === 'circle') ctx.arc(cx, cy, 120, 0, 2*Math.PI);
    else if(key === 'tri-right') { ctx.moveTo(cx-100, cy+100); ctx.lineTo(cx+100, cy+100); ctx.lineTo(cx-100, cy-100); ctx.closePath();
    }
    else if(key === 'tri-equi') { const h_tri = 200 * Math.sqrt(3)/2;
    ctx.moveTo(cx, cy - h_tri/2); ctx.lineTo(cx+100, cy + h_tri/2); ctx.lineTo(cx-100, cy + h_tri/2); ctx.closePath();
    }
    else if(key === 'tri-iso') { ctx.moveTo(cx, cy - 120);
    ctx.lineTo(cx+80, cy + 120); ctx.lineTo(cx-80, cy + 120); ctx.closePath(); }
    else if(key === 'para') { ctx.moveTo(cx-120, cy+60);
    ctx.lineTo(cx+80, cy+60); ctx.lineTo(cx+120, cy-60); ctx.lineTo(cx-80, cy-60); ctx.closePath(); }
    else if(key === 'sector') { ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, 120, -0.5, 1.0); ctx.closePath(); }
    else if(key === 'parabola') { ctx.moveTo(cx-100, cy-100);
    ctx.quadraticCurveTo(cx, cy+200, cx+100, cy-100); ctx.lineTo(cx-100, cy-100); }
    else if(key === 'polygon') {
        const sides = parseFloat(document.getElementById('i2d-count').value) || 6;
        const radius = 100;
        for(let i=0; i<=sides; i++) {
            const ang = i * 2 * Math.PI / sides - Math.PI/2;
            const x = cx + radius * Math.cos(ang);
            const y = cy + radius * Math.sin(ang);
            if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
        }
    }
    ctx.fill();
    ctx.stroke();
}

function selectShape3D(key) {
    currentShape3D = key;
    const s = g3dData[key];
    document.getElementById('g3d-menu').classList.add('hidden');
    document.getElementById('g3d-workspace').classList.remove('hidden');
    document.getElementById('g3d-title').innerText = (curLang==='ar'?s.name_ar:s.name_en);
    
    const inputsDiv = document.getElementById('g3d-inputs');
    inputsDiv.innerHTML = '';
    s.inputs.forEach(i => {
        const [id, label] = i.split(':');
        inputsDiv.innerHTML += `<div class="form-group"><label>${label}</label><input type="number" id="i3d-${id}" class="form-control" step="0.01"></div>`;
    });
    document.getElementById('g3d-res').classList.add('hidden');
}

function showG3DMenu() {
    document.getElementById('g3d-workspace').classList.add('hidden');
    document.getElementById('g3d-menu').classList.remove('hidden');
    document.getElementById('g3d-res').classList.add('hidden');
}

function calcG3D() {
    if(!currentShape3D) return;
    const key = currentShape3D;
    const get = (id) => parseFloat(document.getElementById('i3d-'+id).value) || 0;
    let vol = 0, surf = 0;
    if(key === 'cube') { const s=get('side'); vol=s**3; surf=6*s*s; }
    else if(key === 'box') { const l=get('len'), w=get('wid'), h=get('hgt');
    vol=l*w*h; surf=2*(l*w+l*h+w*h); }
    else if(key === 'cyl') { const r=get('rad'), h=get('hgt');
    vol=Math.PI*r*r*h; surf=2*Math.PI*r*(r+h); }
    else if(key === 'cone') { const r=get('rad'), h=get('hgt');
    vol=(1/3)*Math.PI*r*r*h; const s=Math.sqrt(r*r+h*h); surf=Math.PI*r*(r+s); }
    else if(key === 'sphere') { const r=get('rad');
    vol=(4/3)*Math.PI*r**3; surf=4*Math.PI*r*r; }
    else if(key === 'pyramid') { const b=get('base'), h=get('hgt');
    vol=(b*b*h)/3; const sl=Math.sqrt((b/2)**2 + h*h); surf=b*b + 2*b*sl; }

    document.getElementById('res-g3d-vol').innerText = vol.toFixed(3);
    document.getElementById('res-g3d-surf').innerText = surf.toFixed(3);
    document.getElementById('g3d-res').classList.remove('hidden');
    drawG3D(key);
}

function drawG3D(key) {
    const cvs = document.getElementById('canvas3d');
    const ctx = cvs.getContext('2d');
    const w = cvs.width, h = cvs.height;
    ctx.clearRect(0,0,w,h);
    const cx = w/2, cy = h/2;
    ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 2;
    const ellipse = (x,y,rx,ry) => { ctx.beginPath(); ctx.ellipse(x,y,rx,ry,0,0,2*Math.PI); ctx.stroke(); };
    if(key === 'cube' || key === 'box') {
        const d = 80;
        ctx.strokeRect(cx-d, cy-d, 2*d, 2*d);
        ctx.strokeStyle = 'rgba(99,102,241,0.3)';
        ctx.strokeRect(cx-d+40, cy-d-40, 2*d, 2*d);
        ctx.strokeStyle = '#6366f1'; ctx.beginPath();
        ctx.moveTo(cx-d, cy-d); ctx.lineTo(cx-d+40, cy-d-40);
        ctx.moveTo(cx+d, cy-d); ctx.lineTo(cx+d+40, cy-d-40);
        ctx.moveTo(cx+d, cy+d); ctx.lineTo(cx+d+40, cy+d-40);
        ctx.moveTo(cx-d, cy+d); ctx.lineTo(cx-d+40, cy+d-40);
        ctx.stroke();
    }
    else if(key === 'cyl') {
        ellipse(cx, cy-80, 60, 20);
        ellipse(cx, cy+80, 60, 20);
        ctx.beginPath(); ctx.moveTo(cx-60, cy-80); ctx.lineTo(cx-60, cy+80);
        ctx.moveTo(cx+60, cy-80); ctx.lineTo(cx+60, cy+80); ctx.stroke();
    }
    else if(key === 'cone') {
        ellipse(cx, cy+80, 60, 20);
        ctx.beginPath(); ctx.moveTo(cx-60, cy+80); ctx.lineTo(cx, cy-80); ctx.lineTo(cx+60, cy+80); ctx.stroke();
    }
    else if(key === 'sphere') {
        ctx.beginPath();
        ctx.arc(cx, cy, 90, 0, 2*Math.PI); ctx.stroke();
        ellipse(cx, cy, 90, 20);
        ctx.beginPath(); ctx.ellipse(cx, cy, 20, 90, 0, 0, 2*Math.PI); ctx.stroke();
    }
    else if(key === 'pyramid') {
        ctx.beginPath();
        ctx.moveTo(cx-60, cy+60); ctx.lineTo(cx+60, cy+60); ctx.lineTo(cx+90, cy+30);
        ctx.strokeStyle = 'rgba(99,102,241,0.3)'; ctx.lineTo(cx-30, cy+30); ctx.lineTo(cx-60, cy+60); ctx.stroke();
        ctx.strokeStyle = '#6366f1'; ctx.beginPath();
        ctx.moveTo(cx, cy-80);
        ctx.lineTo(cx-60, cy+60);
        ctx.moveTo(cx, cy-80); ctx.lineTo(cx+60, cy+60);
        ctx.moveTo(cx, cy-80); ctx.lineTo(cx+90, cy+30); ctx.stroke();
    }
}

/* --- 9. GEODETIC CONVERTER --- */
let geo_currentData = {
    wgs84: {x: 0, y: 0},
    jtm: {x: 0, y: 0},
    cassini: {x: 0, y: 0}
};

function geo_updateLabels() {
    const source = document.getElementById("geo_sourceSys").value;
    const lblX = document.getElementById("geo_lbl_x");
    const lblY = document.getElementById("geo_lbl_y");

    if (source === "WGS84") {
        lblX.innerText = "خط الطول (Longitude)";
        lblY.innerText = "دائرة العرض (Latitude)";
    } else {
        lblX.innerText = "Easting (X)";
        lblY.innerText = "Northing (Y)";
    }
}

function geo_processConversion() {
    const source = document.getElementById("geo_sourceSys").value;
    const xVal = parseFloat(document.getElementById("geo_inputX").value);
    const yVal = parseFloat(document.getElementById("geo_inputY").value);

    if (isNaN(xVal) || isNaN(yVal)) {
        alert("الرجاء إدخال إحداثيات صحيحة");
        return;
    }

    try {
        let wgsPoint;
        if (source === "WGS84") {
            wgsPoint = [xVal, yVal];
        } else {
            wgsPoint = proj4(source, "WGS84", [xVal, yVal]);
        }

        geo_currentData.wgs84 = { x: wgsPoint[0], y: wgsPoint[1] };
        const jtmRes = proj4("WGS84", "JTM", wgsPoint);
        geo_currentData.jtm = { x: jtmRes[0], y: jtmRes[1] };
        const cassRes = proj4("WGS84", "CASSINI", wgsPoint);
        geo_currentData.cassini = { x: cassRes[0], y: cassRes[1] };

        geo_displayResults(source);
    } catch (e) {
        console.error(e);
        alert("حدث خطأ في عملية التحويل");
    }
}

function geo_displayResults(excludeSys) {
    const container = document.getElementById("cards-wrapper");
    container.innerHTML = "";
    
    const systems = [
        { code: "WGS84", name: "نظام WGS84 (Google)", data: geo_currentData.wgs84, label1: "Lon", label2: "Lat", digits: 7 },
        { code: "JTM", name: "نظام JTM (الأردني)", data: geo_currentData.jtm, label1: "E", label2: "N", digits: 3 },
        { code: "CASSINI", name: "نظام Cassini (القديم)", data: geo_currentData.cassini, label1: "E", label2: "N", digits: 3 }
    ];
    
    systems.forEach(sys => {
        if (sys.code !== excludeSys) {
            const card = document.createElement("div");
            card.className = "stat-box";
            card.innerHTML = `
                <div class="stat-lbl">${sys.name}</div>
                <div class="stat-val">${sys.data.x.toFixed(sys.digits)}</div>
                <div class="stat-lbl">${sys.label1}</div>
                <div class="stat-val">${sys.data.y.toFixed(sys.digits)}</div>
                <div class="stat-lbl">${sys.label2}</div>
            `;
            container.appendChild(card);
        }
    });
    
    document.getElementById("geo-results-container").classList.remove("hidden");
}

function geo_exportKML() {
    const lon = geo_currentData.wgs84.x;
    const lat = geo_currentData.wgs84.y;
    const kmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Placemark>
    <name>Converted Point</name>
    <description>JTM: ${geo_currentData.jtm.x.toFixed(3)}, ${geo_currentData.jtm.y.toFixed(3)}</description>
    <Point>
      <coordinates>${lon},${lat},0</coordinates>
    </Point>
  </Placemark>
</kml>`;
    downloadFile("point.kml", kmlContent, "application/vnd.google-earth.kml+xml");
}

function geo_exportCSV() {
    const headers = ["System", "X / Longitude", "Y / Latitude"];
    const rows = [
        ["WGS84", geo_currentData.wgs84.x.toFixed(8), geo_currentData.wgs84.y.toFixed(8)],
        ["JTM", geo_currentData.jtm.x.toFixed(3), geo_currentData.jtm.y.toFixed(3)],
        ["CASSINI", geo_currentData.cassini.x.toFixed(3), geo_currentData.cassini.y.toFixed(3)]
    ];
    let csvContent = "\uFEFF";
    csvContent += headers.join(",") + "\n";
    rows.forEach(row => {
        csvContent += row.join(",") + "\n";
    });
    downloadFile("coordinates.csv", csvContent, "text/csv;charset=utf-8;");
}

/* --- 10. STADIA DISTANCE CALCULATOR --- */
function stadia_calcDistance() {
    let K = parseFloat(document.getElementById('stadia_kConst').value);
    let upper = parseFloat(document.getElementById('stadia_upper').value);
    let lower = parseFloat(document.getElementById('stadia_lower').value);
    let resultBox = document.getElementById('stadia_result-box');
    let finalResult = document.getElementById('stadia_finalResult');

    if (isNaN(K) || isNaN(upper) || isNaN(lower)) {
        alert("الرجاء تعبئة جميع الحقول");
        return;
    }
    if (upper <= lower) {
        alert("خطأ: الشعرة العليا يجب أن تكون أكبر من السفلى");
        return;
    }
    let distance = K * (upper - lower);
    finalResult.innerText = distance.toFixed(2);
    resultBox.classList.remove("hidden");
}

/* --- 11. LEVELING TABLE --- */
function lev_addRow() {
    const table = document.getElementById('level-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    newRow.innerHTML = `
        <td><input type="text" class="form-control"></td>
        <td><input type="number" step="0.001" class="bs-input form-control"></td>
        <td><input type="number" step="0.001" class="is-input form-control"></td>
        <td><input type="number" step="0.001" class="fs-input form-control"></td>
        <td><input type="number" step="0.001" class="hi-output form-control" readonly></td>
        <td><input type="number" step="0.001" class="rl-output form-control" readonly></td>
        <td><input type="text" class="form-control"></td>
        <td class="no-print"><button onclick="lev_deleteRow(this)" class="btn btn-danger btn-sm">X</button></td>
    `;
}

function lev_deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    if (row.rowIndex === 1) { 
        alert("لا يمكن حذف الصف الأول (نقطة الربط). يمكنك مسح بياناته.");
        return;
    }
    row.parentNode.removeChild(row);
}

function lev_calculateLevel() {
    const initialBM = parseFloat(document.getElementById('lev_initial-bm').value);
    if (isNaN(initialBM)) {
        alert("الرجاء إدخال منسوب أول نقطة (BM) بشكل صحيح");
        return;
    }

    const rows = document.querySelectorAll('#level-table tbody tr');
    let currentHI = 0;
    let lastRL = initialBM;
    let sumBS = 0;
    let sumFS = 0;
    let firstRL = initialBM;
    let finalRL = initialBM;

    const firstRowInputs = rows[0].querySelectorAll('input');
    const firstBS = parseFloat(firstRowInputs[1].value); 
    
    firstRowInputs[5].value = initialBM.toFixed(3);

    if (!isNaN(firstBS)) {
        currentHI = initialBM + firstBS;
        firstRowInputs[4].value = currentHI.toFixed(3); 
        sumBS += firstBS;
    } else {
        alert("الصف الأول يجب أن يحتوي على قراءة خلفية (BS) لبدء الحساب.");
        firstRowInputs[4].value = "";
        return;
    }

    for (let i = 1; i < rows.length; i++) {
        const inputs = rows[i].querySelectorAll('input');
        const bs = parseFloat(inputs[1].value);
        const is = parseFloat(inputs[2].value);
        const fs = parseFloat(inputs[3].value);
        
        let currentRL = null;
        inputs[4].value = "";
        inputs[5].value = "";

        if (!isNaN(is)) {
            currentRL = currentHI - is;
        } else if (!isNaN(fs)) {
            currentRL = currentHI - fs;
            sumFS += fs;
        } else {
            continue;
        }

        if (currentRL !== null) {
            inputs[5].value = currentRL.toFixed(3);
            finalRL = currentRL; 
        }

        if (!isNaN(fs) && !isNaN(bs) && currentRL !== null) {
            currentHI = currentRL + bs;
            inputs[4].value = currentHI.toFixed(3); 
            sumBS += bs;
        } else if (i < rows.length - 1 && currentRL !== null && isNaN(fs) && !isNaN(bs) && isNaN(is)) {
             currentHI = currentRL + bs;
            inputs[4].value = currentHI.toFixed(3); 
            sumBS += bs;
        }
    }
    
    document.getElementById('lev_sum-bs').textContent = sumBS.toFixed(3);
    document.getElementById('lev_sum-fs').textContent = sumFS.toFixed(3);

    const diffSight = sumBS - sumFS;
    const diffLevel = finalRL - firstRL;
    
    const checkDiv = document.getElementById('lev_check-math');
    const checkText = document.getElementById('lev_math-check-text');
    
    checkDiv.classList.remove('hidden');
    
    if (Math.abs(diffSight - diffLevel) <= 0.002) {
        checkDiv.style.background = "#d4edda";
        checkDiv.style.color = "#155724";
        checkDiv.style.borderColor = "#155724";
        checkText.innerHTML = `
        *مجموع (BS): ${sumBS.toFixed(3)}* | *مجموع (FS): ${sumFS.toFixed(3)}* <br> 
        **فرق القراءات:** ${diffSight.toFixed(3)} | **فرق المنسوب:** ${diffLevel.toFixed(3)} <br>
        <span style="color:#27ae60">✅ الحسابات متوازنة ضمن التسامح.</span>`;
    } else {
        checkDiv.style.background = "#f8d7da";
        checkDiv.style.color = "#721c24";
        checkDiv.style.borderColor = "#721c24";
        checkText.innerHTML = `
        *مجموع (BS): ${sumBS.toFixed(3)}* | *مجموع (FS): ${sumFS.toFixed(3)}* <br> 
        **فرق القراءات:** ${diffSight.toFixed(3)} | **فرق المنسوب:** ${diffLevel.toFixed(3)} <br>
        <span style="color:#e74c3c">❌ خطأ في الميزانية! الفرق أكبر من التسامح.</span>`;
    }
}

function lev_exportToExcel() {
    const table = document.getElementById('level-table');
    let csv = [];
    
    const initialBM = document.getElementById('lev_initial-bm').value || "غير محدد";
    csv.push(`منسوب نقطة الربط,${initialBM} متر`);

    let headers = [];
    table.querySelectorAll('thead th:not(.no-print)').forEach(th => {
        headers.push(th.textContent.trim().replace(/\s/g, ' '));
    });
    csv.push(headers.join(','));

    table.querySelectorAll('tbody tr').forEach(row => {
        let rowData = [];
        row.querySelectorAll('td').forEach(td => {
            const input = td.querySelector('input');
            if (input) {
                rowData.push(`"${input.value.trim().replace(/"/g, '""')}"`); 
            } else {
                if (!td.classList.contains('no-print')) {
                    rowData.push('');
                }
            }
        });
        csv.push(rowData.join(','));
    });

    const sumBS = document.getElementById('lev_sum-bs').textContent;
    const sumFS = document.getElementById('lev_sum-fs').textContent;
    csv.push(`المجاميع,${sumBS},,${sumFS},,,`);

    const csvFile = new Blob(["\uFEFF" + csv.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const fileName = 'جدول_التسوية_المساحية_' + new Date().toISOString().slice(0, 10) + '.csv';
    downloadFile(fileName, "\uFEFF" + csv.join('\n'), 'text/csv;charset=utf-8;');
}

function lev_resetTable() {
    if(confirm("هل أنت متأكد من مسح جميع البيانات وإعادة ضبط الجدول؟")) {
        location.reload();
    }
}

/* --- 12. UNIT CONVERTER --- */
const unit_conversionRates = {
    mm: 0.001, cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344
};
const unit_names = {
    mm: "مليمتر", cm: "سنتيمتر", m: "متر", km: "كيلومتر", in: "بوصة", ft: "قدم", yd: "ياردة", mi: "ميل"
};

function unit_convert() {
    const amount = parseFloat(document.getElementById('unit_amount').value);
    const fromUnit = document.getElementById('unit_fromUnit').value;
    const toUnit = document.getElementById('unit_toUnit').value;

    if (isNaN(amount)) {
        document.getElementById('unit_output').innerText = "---";
        return;
    }
    const valueInMeters = amount * unit_conversionRates[fromUnit];
    const result = valueInMeters / unit_conversionRates[toUnit];
    let finalResult = Number.isInteger(result) ? result : parseFloat(result.toFixed(5));

    document.getElementById('unit_output').innerText = finalResult;
    document.getElementById('unit_unitDisplay').innerText = unit_names[toUnit];
    document.getElementById('unit-res').classList.remove('hidden');
}

function unit_swapUnits() {
    const fromSelect = document.getElementById('unit_fromUnit');
    const toSelect = document.getElementById('unit_toUnit');
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    unit_convert();
}

/* --- 13. PHYSICS LAB - FIXED --- */
const phys_laws = {
    mechanics: [
        { 
            id: 'speed', 
            name: 'السرعة (v = d / t)', 
            inputs: [
                { id: 'd', label: 'المسافة (Distance)', unit: 'متر (m)' }, 
                { id: 't', label: 'الزمن (Time)', unit: 'ثانية (s)' }
            ], 
            unit: 'م/ث (m/s)', 
            calc: (vals) => vals.d / vals.t 
        },
        { 
            id: 'force', 
            name: 'القوة - قانون نيوتن الثاني (F = m × a)', 
            inputs: [
                { id: 'm', label: 'الكتلة (Mass)', unit: 'كغ (kg)' }, 
                { id: 'a', label: 'التسارع (Acceleration)', unit: 'م/ث²' }
            ], 
            unit: 'نيوتن (N)', 
            calc: (vals) => vals.m * vals.a 
        },
        { 
            id: 'accel', 
            name: 'التسارع (a = v / t)', 
            inputs: [
                { id: 'v', label: 'السرعة (Velocity)', unit: 'م/ث' }, 
                { id: 't', label: 'الزمن (Time)', unit: 'ثانية' }
            ], 
            unit: 'م/ث²', 
            calc: (vals) => vals.v / vals.t 
        }
    ],
    electricity: [
        { 
            id: 'ohm_v', 
            name: 'الجهد - قانون أوم (V = I × R)', 
            inputs: [
                { id: 'i', label: 'التيار (Current)', unit: 'أمبير (A)' }, 
                { id: 'r', label: 'المقاومة (Resistance)', unit: 'أوم (Ω)' }
            ], 
            unit: 'فولت (V)', 
            calc: (vals) => vals.i * vals.r 
        },
        { 
            id: 'ohm_i', 
            name: 'التيار الكهربائي (I = V / R)', 
            inputs: [
                { id: 'v', label: 'الجهد (Voltage)', unit: 'فولت (V)' }, 
                { id: 'r', label: 'المقاومة (Resistance)', unit: 'أوم (Ω)' }
            ], 
            unit: 'أمبير (A)', 
            calc: (vals) => vals.v / vals.r 
        },
        { 
            id: 'power', 
            name: 'القدرة الكهربائية (P = V × I)', 
            inputs: [
                { id: 'v', label: 'الجهد (Voltage)', unit: 'فولت (V)' }, 
                { id: 'i', label: 'التيار (Current)', unit: 'أمبير (A)' }
            ], 
            unit: 'واط (Watt)', 
            calc: (vals) => vals.v * vals.i 
        }
    ],
    energy: [
        { 
            id: 'work', 
            name: 'الشغل الميكانيكي (W = F × d)', 
            inputs: [
                { id: 'f', label: 'القوة (Force)', unit: 'نيوتن (N)' }, 
                { id: 'd', label: 'المسافة (Distance)', unit: 'متر (m)' }
            ], 
            unit: 'جول (Joule)', 
            calc: (vals) => vals.f * vals.d 
        },
        { 
            id: 'density', 
            name: 'الكثافة (ρ = m / V)', 
            inputs: [
                { id: 'm', label: 'الكتلة (Mass)', unit: 'كغ (kg)' }, 
                { id: 'vol', label: 'الحجم (Volume)', unit: 'م³' }
            ], 
            unit: 'كغ/م³', 
            calc: (vals) => vals.m / vals.vol 
        }
    ]
};
let phys_currentLaw = null;

function phys_filterLaws(category) {
    // تحديث أزرار التبويب
    document.getElementById('phys-btn-mech').classList.remove('btn-primary');
    document.getElementById('phys-btn-elec').classList.remove('btn-primary');
    document.getElementById('phys-btn-energy').classList.remove('btn-primary');
    document.getElementById('phys-btn-mech').classList.add('btn-secondary');
    document.getElementById('phys-btn-elec').classList.add('btn-secondary');
    document.getElementById('phys-btn-energy').classList.add('btn-secondary');
    
    if(category === 'mechanics') {
        document.getElementById('phys-btn-mech').classList.remove('btn-secondary');
        document.getElementById('phys-btn-mech').classList.add('btn-primary');
    } else if(category === 'electricity') {
        document.getElementById('phys-btn-elec').classList.remove('btn-secondary');
        document.getElementById('phys-btn-elec').classList.add('btn-primary');
    } else if(category === 'energy') {
        document.getElementById('phys-btn-energy').classList.remove('btn-secondary');
        document.getElementById('phys-btn-energy').classList.add('btn-primary');
    }

    const select = document.getElementById('phys_lawSelector');
    select.innerHTML = '<option value="" disabled selected>-- اختر القانون --</option>';
    
    phys_laws[category].forEach(law => {
        const option = document.createElement('option');
        option.value = law.id;
        option.textContent = law.name;
        select.appendChild(option);
    });

    document.getElementById('phys_inputsContainer').innerHTML = '<p style="text-align: center; color: var(--text-muted);">اختر قانوناً من القائمة أعلاه</p>';
    document.getElementById('phys_inputsContainer').classList.remove('hidden');
    document.getElementById('phys_resultBox').classList.add('hidden');
    phys_currentLaw = null;
}

function phys_updateInputs() {
    const select = document.getElementById('phys_lawSelector');
    if(!select.value) return;
    
    const lawId = select.value;
    const category = 
        phys_laws.mechanics.find(l => l.id === lawId) ? 'mechanics' :
        phys_laws.electricity.find(l => l.id === lawId) ? 'electricity' :
        phys_laws.energy.find(l => l.id === lawId) ? 'energy' : 'mechanics';
    
    phys_currentLaw = phys_laws[category].find(l => l.id === lawId);
    
    if (!phys_currentLaw) return;
    
    const container = document.getElementById('phys_inputsContainer');
    container.innerHTML = '';
    
    phys_currentLaw.inputs.forEach(input => {
        const div = document.createElement('div');
        div.className = 'form-group';
        div.innerHTML = `
            <label>${input.label} (${input.unit}):</label>
            <input type="number" id="phys_inp_${input.id}" class="form-control" placeholder="أدخل القيمة">
        `;
        container.appendChild(div);
    });
    
    container.classList.remove('hidden');
    document.getElementById('phys_resultBox').classList.add('hidden');
}

function phys_calculate() {
    if (!phys_currentLaw) {
        alert("الرجاء اختيار قانون أولاً!");
        return;
    }

    const values = {};
    let allFilled = true;

    phys_currentLaw.inputs.forEach(input => {
        const inputElement = document.getElementById(`phys_inp_${input.id}`);
        const val = parseFloat(inputElement.value);
        if (isNaN(val)) {
            allFilled = false;
            inputElement.style.borderColor = 'var(--danger)';
        } else {
            inputElement.style.borderColor = '';
            values[input.id] = val;
        }
    });

    if (!allFilled) {
        alert("الرجاء إدخال جميع القيم المطلوبة بشكل صحيح.");
        return;
    }

    const result = phys_currentLaw.calc(values);
    const resultBox = document.getElementById('phys_resultBox');
    const outputValue = document.getElementById('phys_outputValue');
    const outputUnit = document.getElementById('phys_outputUnit');

    outputValue.innerText = Number.isInteger(result) ? result : result.toFixed(4);
    outputUnit.innerText = phys_currentLaw.unit;
    
    resultBox.classList.remove('hidden');
}

// Start
document.addEventListener('DOMContentLoaded', function() {
    init();
});

// وظيفة المساعد الذكي للربط مع بايثون
async function askAI() {
    const input = document.getElementById('user-question');
    const output = document.getElementById('chat-output');
    const question = input.value;

    // إذا كانت الخانة فارغة لا تفعل شيئاً
    if (!question) return;

    // 1. عرض سؤالك في شاشة المحادثة
    output.innerHTML += `<div style="margin-top: 10px; color: #ffa500; font-weight: bold; text-align: right;">أنت: ${question}</div>`;
    input.value = ""; // مسح الخانة للكتابة مرة أخرى
    output.scrollTop = output.scrollHeight;

    try {
        // 2. إرسال السؤال إلى خادم بايثون (app.py)
        const response = await fetch('http://localhost:5000/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: question })
        });
        
        const data = await response.json();
        
        // 3. عرض إجابة الـ AI المستخرجة من الكتب
        output.innerHTML += `<div style="margin-top: 10px; background: #252d3a; padding: 12px; border-radius: 8px; text-align: right; color: white;">
            <b style="color: #ffa500;">المساعد الهندسي:</b><br>${data.answer}
        </div>`;
        
        // النزول تلقائياً لآخر الرسائل
        output.scrollTop = output.scrollHeight;

    } catch (error) {
        // في حال عدم تشغيل app.py
        output.innerHTML += `<p style="color: red; font-size: 12px; text-align: center;">خطأ: تأكد من تشغيل خادم بايثون (app.py) في الـ Terminal</p>`;
    }
}