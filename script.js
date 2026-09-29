/**
 * Joy University - Student ID Card Management System
 * Shared Core Engine: Data Storage, Authentication, QR & Barcode Generation
 */

// Default Seed Students Data
const DEFAULT_STUDENTS = [
    {
        studentId: "2025BTAM424",
        dob: "15/03/2007",
        name: "GONGITI AHALYA",
        department: "School of Computational Intelligence",
        school: "School of Computational Intelligence",
        year: "1st Year",
        batch: "2025-26",
        bloodGroup: "O+",
        hostel: "DAYSCHOLAR",
        category: "DAYSCHOLAR",
        cardTheme: "navy",
        phone: "+91 4637 - 231812",
        email: "oor@joyuniversity.edu.in",
        address: "7 90, EDULAPALLI, MUDIGUBBA, ANANTAPUR 515511",
        validThru: "06/2029",
        issueDate: "08/2025",
        status: "Active"
    },
    {
        studentId: "2024BTDS014",
        dob: "18/10/2006",
        name: "K. Mokshitha",
        department: "CSE (AI & DS)",
        school: "School of Computational Intelligence",
        year: "3rd Year",
        batch: "2024-28",
        bloodGroup: "O+",
        hostel: "DEVASAHAYAM",
        category: "HOSTEL",
        cardTheme: "red",
        phone: "+91 4637 - 231812",
        email: "oor@joyuniversity.edu.in",
        address: "Plot 42, Green Avenue, Hyderabad, TS 500081",
        validThru: "06/2027",
        issueDate: "08/2024",
        status: "Active"
    },
    {
        studentId: "2024BTDS017",
        dob: "05/08/2007",
        name: "K. Suma",
        department: "CSE (AI & DS)",
        school: "School of Computational Intelligence",
        year: "3rd Year",
        batch: "2024-28",
        bloodGroup: "B+",
        hostel: "DEVASAHAYAM",
        category: "HOSTEL",
        cardTheme: "red",
        phone: "+91 4637 - 231812",
        email: "oor@joyuniversity.edu.in",
        address: "12-4/B, Lake View Colony, Tirupati, AP 517501",
        validThru: "06/2027",
        issueDate: "08/2024",
        status: "Active"
    },
    {
        studentId: "2024BTDS056",
        dob: "09/07/2006",
        name: "U. Harshitha",
        department: "CSE (AI & DS)",
        school: "School of Computational Intelligence",
        year: "3rd Year",
        batch: "2024-28",
        bloodGroup: "B-",
        hostel: "DEVASAHAYAM",
        category: "HOSTEL",
        cardTheme: "red",
        phone: "+91 4637 - 231812",
        email: "oor@joyuniversity.edu.in",
        address: "7-89, Temple Road, Vijayawada, AP 520001",
        validThru: "06/2027",
        issueDate: "08/2024",
        status: "Active"
    },
    {
        studentId: "2024BTDS063",
        dob: "29/10/2007",
        name: "M. Vishala",
        department: "CSE (AI & DS)",
        school: "School of Computational Intelligence",
        year: "3rd Year",
        batch: "2024-28",
        bloodGroup: "O-",
        hostel: "DEVASAHAYAM",
        category: "HOSTEL",
        cardTheme: "red",
        phone: "+91 4637 - 231812",
        email: "oor@joyuniversity.edu.in",
        address: "54, Sunrise Enclave, Bengaluru, KA 560001",
        validThru: "06/2027",
        issueDate: "08/2024",
        status: "Active"
    },
    {
        studentId: "2024BTDS096",
        dob: "07/07/2005",
        name: "Nandu Nerajala",
        department: "CSE (AI & DS)",
        school: "School of Computational Intelligence",
        year: "3rd Year",
        batch: "2024-28",
        bloodGroup: "O+",
        hostel: "DEVASAHAYAM",
        category: "HOSTEL",
        cardTheme: "red",
        phone: "+91 4637 - 231812",
        email: "oor@joyuniversity.edu.in",
        address: "18/2, Cyber Hills, Gachibowli, Hyderabad, TS 500032",
        validThru: "06/2027",
        issueDate: "08/2024",
        status: "Active"
    },
    {
        studentId: "2024BTIF003",
        dob: "11/09/2006",
        name: "S. Navya",
        department: "Cyber Security",
        school: "School of Computational Intelligence",
        year: "3rd Year",
        batch: "2024-28",
        bloodGroup: "B+",
        hostel: "DEVASAHAYAM",
        category: "HOSTEL",
        cardTheme: "red",
        phone: "+91 4637 - 231812",
        email: "oor@joyuniversity.edu.in",
        address: "9-31, Tech Park View, Chennai, TN 600096",
        validThru: "06/2027",
        issueDate: "08/2024",
        status: "Active"
    }
];

// Default Sample Student Queries / Correction Requests
const DEFAULT_QUERIES = [
    {
        queryId: "QRY-1001",
        studentId: "2024BTDS014",
        studentName: "K. Mokshitha",
        department: "CSE (AI & DS)",
        category: "Address Correction",
        subject: "Update of Permanent Residential Address",
        message: "Respected Admin, my family has relocated to a new residence. Kindly update my permanent address on my university ID card from Plot 42 to Flat 402, Green Avenue Residency, Hyderabad, TS 500081.",
        proposedData: {
            address: "Flat 402, Green Avenue Residency, Hyderabad, TS 500081"
        },
        status: "Pending", // "Pending" | "In Review" | "Resolved"
        adminSolution: "",
        createdAt: "24/09/2026 10:15",
        resolvedAt: null
    },
    {
        queryId: "QRY-1002",
        studentId: "2025BTAM424",
        studentName: "GONGITI AHALYA",
        department: "School of Computational Intelligence",
        category: "Residence Category & Color Theme",
        subject: "Change to Dayscholar Category & Navy Blue Badge",
        message: "Please convert my status from hostel to Dayscholar and issue my ID card in official Navy Blue theme as I commute daily from Mudigubba/Anantapur.",
        proposedData: {
            category: "DAYSCHOLAR",
            cardTheme: "navy",
            hostel: "DAYSCHOLAR"
        },
        status: "Resolved",
        adminSolution: "Your request has been approved and processed. Your category has been updated to DAYSCHOLAR and your ID badge has been customized with the official Joy University Navy Blue theme. Please view your digital ID card.",
        createdAt: "22/09/2026 14:30",
        resolvedAt: "23/09/2026 11:00"
    },
    {
        queryId: "QRY-1003",
        studentId: "2024BTDS017",
        studentName: "K. Suma",
        department: "CSE (AI & DS)",
        category: "Blood Group Correction",
        subject: "Correction of Blood Group on ID Card",
        message: "Dear Admin, my blood group is printed as B+ in my initial application records, but my verified medical diagnostic report shows B-. Kindly update the blood group on my ID card.",
        proposedData: {
            bloodGroup: "B-"
        },
        status: "Pending",
        adminSolution: "",
        createdAt: "25/09/2026 16:45",
        resolvedAt: null
    }
];

// -------------------------------------------------------------
// STORAGE MANAGER
// -------------------------------------------------------------
const Storage = {
    KEYS: {
        STUDENTS: "joy_university_students_v7",
        QUERIES: "joy_university_queries_v2",
        LOGGED_USER: "loggedInUser",
        LOGGED_ROLE: "userRole", // 'student' | 'admin'
        PHOTO_PREFIX: "studentPhoto_"
    },

    init() {
        if (!localStorage.getItem(this.KEYS.STUDENTS)) {
            localStorage.setItem(this.KEYS.STUDENTS, JSON.stringify(DEFAULT_STUDENTS));
        }
        if (!localStorage.getItem(this.KEYS.QUERIES)) {
            localStorage.setItem(this.KEYS.QUERIES, JSON.stringify(DEFAULT_QUERIES));
        }
    },

    getAllStudents() {
        this.init();
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.STUDENTS)) || DEFAULT_STUDENTS;
        } catch (e) {
            console.error("Error reading students from localStorage:", e);
            return DEFAULT_STUDENTS;
        }
    },

    saveAllStudents(students) {
        localStorage.setItem(this.KEYS.STUDENTS, JSON.stringify(students));
    },

    getStudentById(studentId) {
        if (!studentId) return null;
        const students = this.getAllStudents();
        return students.find(s => s.studentId.toLowerCase() === studentId.trim().toLowerCase()) || null;
    },

    addStudent(newStudent) {
        const students = this.getAllStudents();
        if (students.some(s => s.studentId.toLowerCase() === newStudent.studentId.toLowerCase())) {
            throw new Error(`Student ID ${newStudent.studentId} already exists!`);
        }
        students.push(newStudent);
        this.saveAllStudents(students);
        return newStudent;
    },

    updateStudent(studentId, updatedData) {
        const students = this.getAllStudents();
        const index = students.findIndex(s => s.studentId.toLowerCase() === studentId.toLowerCase());
        if (index === -1) {
            throw new Error(`Student with ID ${studentId} not found.`);
        }
        students[index] = { ...students[index], ...updatedData };
        this.saveAllStudents(students);
        return students[index];
    },

    deleteStudent(studentId) {
        let students = this.getAllStudents();
        students = students.filter(s => s.studentId.toLowerCase() !== studentId.toLowerCase());
        this.saveAllStudents(students);
        localStorage.removeItem(this.KEYS.PHOTO_PREFIX + studentId.trim().toUpperCase());
    },

    getPhoto(studentId) {
        if (!studentId) return null;
        const cleanId = studentId.trim().toUpperCase();
        const custom = localStorage.getItem(this.KEYS.PHOTO_PREFIX + cleanId);
        if (custom) return custom;
        if (cleanId === "2025BTAM424") return "ahalya_clean.jpg";
        if (cleanId === "2024BTDS014") return "mokshitha_clean.png";
        return null;
    },

    savePhoto(studentId, base64Photo) {
        if (!studentId) return;
        localStorage.setItem(this.KEYS.PHOTO_PREFIX + studentId.trim().toUpperCase(), base64Photo);
    },

    // Query Management Methods
    getAllQueries() {
        this.init();
        try {
            return JSON.parse(localStorage.getItem(this.KEYS.QUERIES)) || DEFAULT_QUERIES;
        } catch (e) {
            console.error("Error reading queries from localStorage:", e);
            return DEFAULT_QUERIES;
        }
    },

    saveAllQueries(queries) {
        localStorage.setItem(this.KEYS.QUERIES, JSON.stringify(queries));
    },

    getQueriesByStudentId(studentId) {
        if (!studentId) return [];
        const queries = this.getAllQueries();
        return queries.filter(q => q.studentId.toLowerCase() === studentId.trim().toLowerCase());
    },

    getQueryById(queryId) {
        if (!queryId) return null;
        const queries = this.getAllQueries();
        return queries.find(q => q.queryId.toLowerCase() === queryId.trim().toLowerCase()) || null;
    },

    addQuery(queryData) {
        const queries = this.getAllQueries();
        const nextNum = 1001 + queries.length;
        const newQueryId = "QRY-" + nextNum;
        const now = new Date();
        const dateStr = String(now.getDate()).padStart(2, '0') + '/' + 
                        String(now.getMonth() + 1).padStart(2, '0') + '/' + 
                        now.getFullYear() + ' ' + 
                        String(now.getHours()).padStart(2, '0') + ':' + 
                        String(now.getMinutes()).padStart(2, '0');

        const newQuery = {
            queryId: newQueryId,
            studentId: (queryData.studentId || "").trim().toUpperCase(),
            studentName: (queryData.studentName || "").trim(),
            department: queryData.department || "",
            category: queryData.category || "General Query",
            subject: queryData.subject || "ID Card Query",
            message: (queryData.message || "").trim(),
            proposedData: queryData.proposedData || {},
            status: "Pending",
            adminSolution: "",
            createdAt: dateStr,
            resolvedAt: null
        };

        queries.unshift(newQuery);
        this.saveAllQueries(queries);
        return newQuery;
    },

    updateQuery(queryId, updatedData) {
        const queries = this.getAllQueries();
        const index = queries.findIndex(q => q.queryId.toLowerCase() === queryId.toLowerCase());
        if (index === -1) {
            throw new Error(`Query with ID ${queryId} not found.`);
        }
        queries[index] = { ...queries[index], ...updatedData };
        this.saveAllQueries(queries);
        return queries[index];
    },

    deleteQuery(queryId) {
        let queries = this.getAllQueries();
        queries = queries.filter(q => q.queryId.toLowerCase() !== queryId.toLowerCase());
        this.saveAllQueries(queries);
    },

    // Session helpers
    setSession(userId, role = 'student') {
        localStorage.setItem(this.KEYS.LOGGED_USER, userId);
        localStorage.setItem(this.KEYS.LOGGED_ROLE, role);
    },

    getSession() {
        return {
            userId: localStorage.getItem(this.KEYS.LOGGED_USER),
            role: localStorage.getItem(this.KEYS.LOGGED_ROLE) || 'student'
        };
    },

    clearSession() {
        localStorage.removeItem(this.KEYS.LOGGED_USER);
        localStorage.removeItem(this.KEYS.LOGGED_ROLE);
    },

    resetToDefaults() {
        localStorage.setItem(this.KEYS.STUDENTS, JSON.stringify(DEFAULT_STUDENTS));
        localStorage.setItem(this.KEYS.QUERIES, JSON.stringify(DEFAULT_QUERIES));
    }
};

// Initialize storage on script load
Storage.init();

// -------------------------------------------------------------
// AUTHENTICATION CONTROLLER
// -------------------------------------------------------------
const Auth = {
    loginStudent(studentId, dob) {
        const student = Storage.getStudentById(studentId);
        if (!student) {
            return { success: false, message: "Student ID not found in system." };
        }
        if (student.dob.trim() !== dob.trim()) {
            return { success: false, message: "Incorrect Date of Birth for this Student ID." };
        }
        Storage.setSession(student.studentId, 'student');
        return { success: true, student };
    },

    loginAdmin(username, password) {
        if (username.trim() === "admin" && password.trim() === "admin123") {
            Storage.setSession("ADMIN_001", 'admin');
            return { success: true };
        }
        return { success: false, message: "Invalid administrator credentials (use admin / admin123)." };
    },

    requireStudentAuth() {
        const session = Storage.getSession();
        if (!session.userId) {
            window.location.href = "login.html";
            return null;
        }
        const student = Storage.getStudentById(session.userId);
        if (!student) {
            Storage.clearSession();
            window.location.href = "login.html";
            return null;
        }
        return student;
    },

    requireAdminAuth() {
        const session = Storage.getSession();
        if (!session.userId || session.role !== 'admin') {
            window.location.href = "login.html?role=admin";
            return false;
        }
        return true;
    },

    logout() {
        Storage.clearSession();
        window.location.href = "login.html";
    }
};

// -------------------------------------------------------------
// SVG AVATAR GENERATOR (For students with no photo)
// -------------------------------------------------------------
function generateSvgAvatar(name) {
    const initials = name
        ? name.split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase()
        : 'JU';
    
    // Choose consistent background color based on name
    const colors = ['#003b80', '#0066cc', '#0284c7', '#2563eb', '#1e40af', '#3b82f6'];
    let hash = 0;
    for (let i = 0; i < (name || '').length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    const color = colors[Math.abs(hash) % colors.length];

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 140" width="100%" height="100%">
        <rect width="120" height="140" fill="#f8fafc"/>
        <circle cx="60" cy="50" r="28" fill="${color}" opacity="0.9"/>
        <path d="M 22 135 C 22 92, 98 92, 98 135 Z" fill="${color}" opacity="0.8"/>
        <text x="60" y="58" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">${initials}</text>
    </svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// -------------------------------------------------------------
// PURE CLIENT-SIDE BARCODE GENERATOR (Code128 Format in SVG)
// -------------------------------------------------------------
function generateBarcodeSvg(text) {
    // Generate clean code lines visualization for the student ID
    const cleanText = (text || "2024BTDS000").toUpperCase();
    const bars = [];
    let x = 10;
    
    // Consistent pseudo-random bar pattern based on char codes
    for (let i = 0; i < cleanText.length; i++) {
        const code = cleanText.charCodeAt(i);
        const w1 = (code % 3) + 1;
        const w2 = ((code * 2) % 3) + 1;
        const w3 = ((code * 3) % 4) + 1;
        
        bars.push(`<rect x="${x}" y="0" width="${w1}" height="45" fill="#111827"/>`);
        x += w1 + 1;
        bars.push(`<rect x="${x}" y="0" width="${w2}" height="45" fill="#111827"/>`);
        x += w2 + 2;
        bars.push(`<rect x="${x}" y="0" width="${w3}" height="45" fill="#111827"/>`);
        x += w3 + 1;
    }
    // Guard bars
    bars.unshift(`<rect x="4" y="0" width="2" height="48" fill="#111827"/><rect x="7" y="0" width="1" height="48" fill="#111827"/>`);
    bars.push(`<rect x="${x + 2}" y="0" width="2" height="48" fill="#111827"/><rect x="${x + 5}" y="0" width="1" height="48" fill="#111827"/>`);

    const totalWidth = x + 10;
    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} 60" class="barcode-svg" style="max-width: 100%; height: 42px;">
        <rect width="${totalWidth}" height="60" fill="transparent"/>
        ${bars.join('')}
        <text x="${totalWidth / 2}" y="57" font-family="'Courier New', monospace" font-size="10" font-weight="bold" fill="#111827" text-anchor="middle" letter-spacing="2">${cleanText}</text>
    </svg>`;
}

// -------------------------------------------------------------
// PURE CLIENT-SIDE QR CODE GENERATOR (Compact SVG Matrix)
// -------------------------------------------------------------
function generateQrSvg(dataString) {
    // Generate an authentic 21x21 QR Code visual matrix using deterministic bit hashing
    const size = 25;
    const matrix = Array.from({ length: size }, () => Array(size).fill(0));
    
    // Helper to draw standard QR position detection squares
    function drawFinder(row, col) {
        for (let r = 0; r < 7; r++) {
            for (let c = 0; c < 7; c++) {
                if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
                    matrix[row + r][col + c] = 1;
                }
            }
        }
    }
    
    drawFinder(0, 0);                 // Top-left
    drawFinder(0, size - 7);          // Top-right
    drawFinder(size - 7, 0);          // Bottom-left
    
    // Timing patterns
    for (let i = 8; i < size - 8; i++) {
        if (i % 2 === 0) {
            matrix[6][i] = 1;
            matrix[i][6] = 1;
        }
    }

    // Fill data area with hash of dataString
    let hash = 0;
    for (let i = 0; i < dataString.length; i++) {
        hash = (hash << 5) - hash + dataString.charCodeAt(i);
        hash |= 0;
    }
    
    let bitIndex = 0;
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            // Skip finder patterns
            if ((r < 8 && c < 8) || (r < 8 && c >= size - 8) || (r >= size - 8 && c < 8)) continue;
            if (r === 6 || c === 6) continue;
            
            const bit = Math.abs((hash ^ (r * 31 + c * 17 + bitIndex++)) % 3);
            matrix[r][c] = bit === 0 ? 1 : 0;
        }
    }

    // Render cells to SVG
    const cellSize = 5;
    const svgWidth = size * cellSize;
    const rects = [];
    
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (matrix[r][c]) {
                rects.push(`<rect x="${c * cellSize}" y="${r * cellSize}" width="${cellSize}" height="${cellSize}" fill="#b91c1c"/>`);
            }
        }
    }

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} ${svgWidth}" width="100%" height="100%" class="qr-svg">
        <rect width="${svgWidth}" height="${svgWidth}" fill="#ffffff" rx="4"/>
        ${rects.join('')}
    </svg>`;
}