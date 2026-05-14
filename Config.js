 

/* รูป  */
const _GIMG = {
    bg: './Image/bg.jpg',
    av: './Image/ace.jpg'
};

const GUIDE_DEMO_CONFIG = {
    /* ---------- ส่วนหัว UI คู่มือ ---------- */
    header: {
        title: 'ACE GUIDE',
        subtitle: 'GUIDE v1.0.0-a — ชุดทดสอบข้อมูล',
        description: 'ระบบ GUIDE หลายหมวด หลายหัวข้อย่อย และหลายรูปแบบบล็อก (ข้อความ / รายการ / รูป / สไลเดอร์รูป+ยูทูป)',
        logo: _GIMG.av,
        banner: _GIMG.bg
    },

    /* ---------- หมวดหลัก + หัวข้อย่อย + เนื้อหา ---------- */
    categories: [
        /* --- หมวด: เริ่มต้น / อาชีพ --- */
        {
            label: 'เริ่มต้นและอาชีพ',
            icon: 'fa6-solid:briefcase',
            subTopics: [
                {
                    name: 'อาชีพขุดแร่',
                    content: [
                        { type: 'text', value: 'อาชีพขุดแร่เหมาะกับผู้เล่นใหม่ รายได้มั่นคง และมีจุดรับซื้อแยกชัดเจน' },
                        {
                            type: 'slider',
                            items: [
                                { type: 'image', src: _GIMG.bg },
                                { type: 'image', src: _GIMG.av },
                                { type: 'youtube', videoId: 'dQw4w9WgXcQ' },
                                { type: 'image', src: _GIMG.bg },
                                { type: 'youtube', videoId: 'jNQXAC9IVRw' }
                            ]
                        },
                        {
                            type: 'list',
                            items: [
                                'จุดขุดอยู่ที่เหมืองร้าง',
                                'ต้องมีอุปกรณ์ขุดก่อนเริ่มงาน',
                                'แลกเงินที่จุดรับซื้อของเมือง',
                                'ระวังโซน PvP บางช่วงเวลา'
                            ]
                        },
                        { type: 'text', value: 'เคล็ดลับ: ขายแร่หลังอีเวนต์ Double จะได้กำไรมากกว่าปกติ' }
                    ]
                },
                {
                    name: 'อาชีพประมง',
                    content: [
                        { type: 'text', value: 'ประมงใช้เวลาเล่นน้อยกว่าขุดแร่ แต่ต้องรู้จุดและเหยื่อที่เหมาะสม' },
                        { type: 'list', items: ['ซื้อเบ็ดที่ร้านอุปกรณ์', 'ใช้เหยื่อตามระดับน้ำ', 'ขายปลาที่ตลาด'] },
                        {
                            type: 'slider',
                            items: [
                                { type: 'image', src: _GIMG.av },
                                { type: 'image', src: _GIMG.bg }
                            ]
                        }
                    ]
                },
                {
                    name: 'อาชีพเกษตร',
                    content: [
                        { type: 'text', value: 'ปลูกพืชและเก็บเกี่ยวตามรอบ — เหมาะกับผู้เล่นที่ชอบ AFK สั้น ๆ' },
                        { type: 'image', src: _GIMG.bg },
                        { type: 'list', items: ['ซื้อเมล็ด', 'รดน้ำ / ใส่ปุ๋ยตามระบบ', 'เก็บเกี่ยวแล้วขาย'] }
                    ]
                },
                {
                    name: 'อาชีพขนส่ง',
                    content: [
                        { type: 'text', value: 'งานส่งของระหว่างจุด — อ่านจุดรับและจุดส่งให้ครบก่อนรับงาน' },
                        { type: 'text', value: 'หากรถพังระหว่างทาง ให้เรียกช่างหรือใช้บริการยกรถตามกฎเมือง' },
                        {
                            type: 'slider',
                            items: [
                                { type: 'youtube', videoId: '9bZkp7q19f0' },
                                { type: 'image', src: _GIMG.av }
                            ]
                        }
                    ]
                }
            ]
        },

        /* --- หมวด: กฎหมาย / RP --- */
        {
            label: 'กฎหมายและการเล่น RP',
            icon: 'fa6-solid:gavel',
            subTopics: [
                {
                    name: 'การปล้นธนาคาร',
                    content: [
                        { type: 'text', value: 'การปล้นธนาคารเป็นกิจกรรมที่ต้องอาศัยทีมและแผน — ฝ่าฝืนกฎเมืองอาจถูกลงโทษ' },
                        { type: 'image', src: _GIMG.bg },
                        {
                            type: 'list',
                            items: [
                                'ต้องมีจำนวนตำรวจขั้นต่ำตามประกาศ',
                                'ห้าม combat logging',
                                'ต้องให้ RP คู่กรณีครบถ้วน'
                            ]
                        }
                    ]
                },
                {
                    name: 'การขับรถหนีตำรวจ',
                    content: [
                        { type: 'text', value: 'ขับอย่างมีเหตุผล ไม่ใช้รถเป็นอาวุธโดยไม่มี RP นำ' },
                        { type: 'list', items: ['ลดความเร็วในโซนประชาชนหนาแน่น', 'หลีกเลี่ยงการชนผู้เล่นโดยไม่ตั้งใจ', 'ยอมแพ้เมื่อสถานการณ์สมจริง'] }
                    ]
                },
                {
                    name: 'New Life Rule (NLR)',
                    content: [
                        { type: 'text', value: 'หลังตายในเหตุการณ์ คุณจำเหตุการณ์นั้นไม่ได้และกลับมาเล่นเป็นคนใหม่ในบริบทนั้น' },
                        { type: 'text', value: 'ระยะเวลาและข้อยกเว้นดูประกาศล่าสุดของเมือง' }
                    ]
                },
                {
                    name: 'Metagaming / Powergaming',
                    content: [
                        {
                            type: 'list',
                            items: [
                                'Metagaming: ใช้ข้อมูลที่ตัวละครไม่รู้ (เช่น จากดิสคอร์ด)',
                                'Powergaming: บังคับผลลัพธ์ฝั่งตรงข้ามโดยไม่ให้โอกาสตอบสนอง',
                                'หากสงสัยให้เปิดติเกตถามแอดมิน'
                            ]
                        },
                        { type: 'image', src: _GIMG.av }
                    ]
                }
            ]
        },

        /* --- หมวด: ยานพาหนะ --- */
        {
            label: 'ยานพาหนะและการดูแล',
            icon: 'fa6-solid:car',
            subTopics: [
                {
                    name: 'ซื้อรถและโอนกรรมสิทธิ์',
                    content: [
                        { type: 'text', value: 'ซื้อรถจากโชว์รูมหรือผู้เล่น — ตรวจสอบเอกสารและเลขทะเบียนก่อนจ่าย' },
                        {
                            type: 'slider',
                            items: [
                                { type: 'image', src: _GIMG.bg },
                                { type: 'image', src: _GIMG.av },
                                { type: 'youtube', videoId: 'M7lc1UVf-VE' }
                            ]
                        }
                    ]
                },
                {
                    name: 'การซ่อมและทะเบียน',
                    content: [
                        { type: 'list', items: ['ซ่อมที่อู่หรือช่างที่ได้รับอนุญาต', 'ต่อทะเบียนตามรอบ', 'ประกันรถตามระบบเมือง'] },
                        { type: 'text', value: 'รถบางคลาสมีค่าประกันหรือค่าซ่อมสูง — วางแผนการเงินก่อนซื้อ' }
                    ]
                },
                {
                    name: 'การแต่งรถ',
                    content: [
                        { type: 'text', value: 'แต่งได้ตามกฎความสูงและสีไฟ — ห้ามใช้สติกเกอร์ละเมิดลิขสิทธิ์' },
                        { type: 'image', src: _GIMG.bg }
                    ]
                }
            ]
        },

        /* --- หมวด: สุขภาพ / สเตตัส --- */
        {
            label: 'สุขภาพและระบบตัวละคร',
            icon: 'fa6-solid:heart-pulse',
            subTopics: [
                {
                    name: 'ความหิวกระหาย',
                    content: [
                        { type: 'text', value: 'รักษาแถบอาหารและน้ำเพื่อไม่ให้สเตตัสลดและกระทบการเล่น' },
                        { type: 'list', items: ['ซื้ออาหารจากร้านสะดวกซื้อ', 'ร้านอาหารผู้เล่น', 'น้ำจากตู้กด'] }
                    ]
                },
                {
                    name: 'การบาดเจ็บและการรักษา',
                    content: [
                        { type: 'text', value: 'เมื่อได้รับบาดเจ็บหนัก ให้ขอความช่วยเหลือจากหมอหรือหน่วยกู้ชีพ' },
                        {
                            type: 'slider',
                            items: [
                                { type: 'youtube', videoId: 'dQw4w9WgXcQ' },
                                { type: 'image', src: _GIMG.av }
                            ]
                        },
                        { type: 'list', items: ['Medkit ใช้เมื่อปลอดภัย', 'Bandage สำหรับบาดเจ็บเล็ก', 'ห้ามฟื้นคนกลางสู้ตามกฎเมือง'] }
                    ]
                }
            ]
        },

        /* --- หมวด: อสังหา / ธุรกิจ --- */
        {
            label: 'บ้าน ธุรกิจ และเศรษฐกิจ',
            icon: 'fa6-solid:building',
            subTopics: [
                {
                    name: 'ซื้อบ้าน / อพาร์ตเมนต์',
                    content: [
                        { type: 'text', value: 'ที่อยู่อาศัยใช้เก็บของและจุดเกิด — ตรวจสอบค่าภาษีและความจุตู้เซฟ' },
                        { type: 'image', src: _GIMG.bg },
                        { type: 'list', items: ['ดูทำเลก่อนซื้อ', 'ชำระค่าเช่า/ภาษีตรงเวลา', 'เชิญเพื่อนเข้าบ้านตามสิทธิ์'] }
                    ]
                },
                {
                    name: 'เปิดร้านค้า',
                    content: [
                        { type: 'text', value: 'ธุรกิจผู้เล่นต้องขออนุญาตและติดป้ายราคาให้ชัดเจน' },
                        { type: 'text', value: 'การตั้งราคาสูงเกินจริงอาจถูกพิจารณาเป็นการกีดกันทางการค้า — ดูกฎเมือง' },
                        {
                            type: 'slider',
                            items: [
                                { type: 'image', src: _GIMG.av },
                                { type: 'image', src: _GIMG.bg },
                                { type: 'youtube', videoId: 'jNQXAC9IVRw' }
                            ]
                        }
                    ]
                },
                {
                    name: 'ภาษีและบัญชี',
                    content: [
                        { type: 'list', items: ['ตรวจยอดในธนาคารประจำ', 'จ่ายภาษีก่อนวันครบกำหนด', 'แจ้งแอดมินหากพบบั๊กยอดเงิน'] }
                    ]
                }
            ]
        },

        /* --- หมวด: อีเวนต์ --- */
        {
            label: 'อีเวนต์และกิจกรรมพิเศษ',
            icon: 'fa6-solid:calendar-days',
            subTopics: [
                {
                    name: 'อีเวนต์ Red Zone',
                    content: [
                        { type: 'text', value: 'โซนสีแดงมีกติกาเฉพาะ — อ่านประกาศก่อนเข้าโซนทุกครั้ง' },
                        {
                            type: 'slider',
                            items: [
                                { type: 'image', src: _GIMG.bg },
                                { type: 'youtube', videoId: '9bZkp7q19f0' },
                                { type: 'image', src: _GIMG.av },
                                { type: 'youtube', videoId: 'M7lc1UVf-VE' }
                            ]
                        }
                    ]
                },
                {
                    name: 'ล่าเหรียญ / ภารกิจรายวัน',
                    content: [
                        { type: 'list', items: ['รับภารกิจจาก NPC หรือแอป', 'ทำครบเพื่อรับของรางวัล', 'รีเซ็ตตามเวลาเซิร์ฟเวอร์'] },
                        { type: 'text', value: 'ของรางวัลบางชิ้นมีจำนวนจำกัดต่อรอบ' }
                    ]
                },
                {
                    name: 'คอนเสิร์ต / งานสังคม',
                    content: [
                        { type: 'text', value: 'งานสังคมเน้น RP — ลดเสียงรบกวนและเคารพผู้จัดงาน' },
                        { type: 'image', src: _GIMG.av }
                    ]
                }
            ]
        },

        /* --- หมวด: ทดสอบบล็อกยาว (สไลเดอร์หลายแถบในหน้าเดียว) --- */
        {
            label: 'ทดสอบรูปแบบผสม',
            icon: 'fa6-solid:flask',
            subTopics: [
                {
                    name: 'หน้าเดียวหลายสไลเดอร์ + ข้อความสลับ',
                    content: [
                        { type: 'text', value: 'หัวข้อนี้ใช้ทดสอบการเรียงบล็อกหลายแบบในหน้าเดียว' },
                        {
                            type: 'slider',
                            items: [
                                { type: 'youtube', videoId: 'dQw4w9WgXcQ' },
                                { type: 'youtube', videoId: 'jNQXAC9IVRw' }
                            ]
                        },
                        { type: 'text', value: 'ระหว่างสไลเดอร์: ข้อความแทรกเพื่อดูระยะห่างและการเลื่อนแนวตั้ง' },
                        {
                            type: 'slider',
                            items: [
                                { type: 'image', src: _GIMG.bg },
                                { type: 'image', src: _GIMG.av },
                                { type: 'image', src: _GIMG.bg },
                                { type: 'image', src: _GIMG.av }
                            ]
                        },
                        {
                            type: 'list',
                            items: [
                                'ตรวจว่าปุ่มลูกศรเลื่อนแต่ละแถบได้อิสระ',
                                'ตรวจว่าเล่นวิดีโอใน iframe ได้ (คลิก play)',
                                'ตรวจว่าไม่มีแถบเลื่อนแนวนอนใต้แทร็ก (ใช้ลูกศรแทน)'
                            ]
                        },
                        { type: 'image', src: _GIMG.bg }
                    ]
                },
                {
                    name: 'เฉพาะรายการยาว',
                    content: [
                        {
                            type: 'list',
                            items: [
                                'บรรทัด 1: ทดสอบความยาวของ list',
                                'บรรทัด 2: การขึ้นบรรทัดใหม่',
                                'บรรทัด 3: ตัวเลข 12345',
                                'บรรทัด 4: สัญลักษณ์ !@#$%',
                                'บรรทัด 5: ภาษาไทยผสม English OK',
                                'บรรทัด 6: จุดสิ้นสุดรายการทดสอบ'
                            ]
                        }
                    ]
                },
                {
                    name: 'เฉพาะข้อความต่อเนื่อง',
                    content: [
                        { type: 'text', value: 'ย่อหน้าที่หนึ่ง: Lorem ipsum ในบริบท FiveM ใช้เพื่อดูการตัดบรรทัดและขนาดฟอนต์เมื่อเนื้อหายาว' },
                        { type: 'text', value: 'ย่อหน้าที่สอง: ระบบคู่มือรองรับการผสม text / list / image / slider ตามลำดับที่กำหนดในอาร์เรย์ content' },
                        { type: 'text', value: 'ย่อหน้าที่สาม: เมื่อเชื่อม Lua ให้ส่ง object เดียวกับโครงนี้มาที่ NUI แล้วกำหนดให้ Vue ใช้แทน GUIDE_DEMO_CONFIG ได้' }
                    ]
                }
            ]
        }
    ]
};
