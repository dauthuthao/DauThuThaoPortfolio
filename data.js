// DỮ LIỆU PORTFOLIO CÁ NHÂN - ĐẬU THƯ THẢO
// Bạn có thể dễ dàng thay đổi thông tin dưới đây để cập nhật nội dung trang web

const PORTFOLIO_DATA = {
  // 1. THÔNG TIN CÁ NHÂN
  profile: {
    fullName: "Đậu Thư Thảo",
    title: "Digital Portfolio",
    subTitle: "Sinh viên ngành Công nghệ thông tin & Truyền thông",
    avatar: "assets/images/avatar.jpg", // Đường dẫn tới ảnh chân dung của bạn
    email: "dauthuthao195@gmail.com",
    major: "Khoc Học Máy Tính",
    interests: ["Công nghệ số", "Trí tuệ nhân tạo (AI)", "Thiết kế đồ họa", "Nghiên cứu khoa học"],
    
    // Mục tiêu học tập & Định hướng phát triển
    learningGoals: [
      {
        title: "Làm chủ Công nghệ số",
        desc: "Nắm vững các công cụ phân tích dữ liệu, quản lý dự án trực tuyến và các nền tảng đám mây hiện đại phục vụ học tập và làm việc."
      },
      {
        title: "Ứng dụng AI Hiệu quả",
        desc: "Sử dụng thành thạo các mô hình ngôn ngữ lớn, công cụ tạo hình ảnh để tối ưu hóa quy trình học tập và hỗ trợ tư duy sáng tạo."
      },
      {
        title: "Liêm chính & An toàn số",
        desc: "Rèn luyện ý thức bảo mật thông tin cá nhân và tuân thủ các nguyên tắc đạo đức khi sử dụng công nghệ và trí tuệ nhân tạo."
      }
    ],

    // Mục tiêu của Portfolio
    portfolioObjectives: [
      "Hệ thống hóa và lưu trữ toàn bộ các sản phẩm thực hành từ môn Nhập môn Công nghệ số & AI.",
      "Thể hiện năng lực ứng dụng công nghệ và giải quyết vấn đề trong môi trường số chất lượng cao.",
      "Tạo không gian kết nối, chia sẻ học thuật với bạn bè và giảng viên.",
      "Tối ưu hóa khả năng trình bày, xuất báo cáo PDF chuẩn hóa để phục vụ việc đánh giá kết quả học tập."
    ]
  },

  // 2. DANH SÁCH BÀI TẬP (BÀI 1 - BÀI 6)
  exercises: [
    {
      id: 1,
      number: "Bài tập 1",
      code: "Mục 1.4 - Bài tập 1",
      title: "Thao tác cơ bản với tệp tin và thư mục",
      shortDesc: "Thiết lập cấu trúc thư mục học tập thông minh và quy tắc đặt tên tệp chuẩn hóa.",
      objective: "Học cách tổ chức dữ liệu khoa học, quản lý tệp tin hiệu quả trên máy tính cá nhân và các nền tảng lưu trữ đám mây nhằm tối ưu thời gian tìm kiếm thông tin học tập.",
      process: "1. Nghiên cứu phương pháp phân cấp thư mục theo học kỳ và môn học.\n2. Thiết lập quy tắc đặt tên tệp thống nhất dạng: [MãMôn]_[TênBàiTập]_[TênHọcViên]_[NgàyThựcHiện].\n3. Chụp lại sơ đồ cấu trúc thư mục hoạt động thực tế trên máy tính cá nhân.\n4. Đóng gói tài liệu báo cáo phân tích lý do chọn cấu trúc này.",
      
      // Sản phẩm đính kèm
      product: {
        type: "image", // Loại sản phẩm hiển thị: image, table, prompt_compare, collab_proof, ai_content, principles
        src: "assets/images/bai1_folders.png", // Đường dẫn ảnh cấu trúc thư mục của bạn
        pdfLink: "assets/pdfs/bai1_baocao.pdf", // Đường dẫn tệp PDF của bạn
        caption: "Ảnh minh họa: Cấu trúc cây thư mục học tập được sắp xếp tối ưu và khoa học trên máy tính.",
        details: {
          namingConvention: "[NămHọc]_[HọcKỳ]_[MãMôn]_[TênTàiLiệu] (Ví dụ: 2026_HK2_CS2_Portfolio_DauThuThao.pdf)",
          logic: "Phân chia rõ ràng giữa tài liệu lý thuyết, bài tập thực hành và tài nguyên tham khảo để tránh nhầm lẫn và thất lạc."
        }
      }
    },
    {
      id: 2,
      number: "Bài tập 2",
      code: "Mục 2.4 - Bài tập 2",
      title: "Tìm kiếm và đánh giá thông tin học thuật",
      shortDesc: "Sử dụng toán tử nâng cao để tìm tài liệu nghiên cứu và đánh giá độ tin cậy bằng mô hình CRAAP.",
      objective: "Trang bị kỹ năng tìm kiếm tài liệu chuẩn xác trên Google Scholar/ResearchGate và phân tích, đánh giá độ uy tín của nguồn tài nguyên internet để phục vụ nghiên cứu khoa học.",
      process: "1. Áp dụng các toán tử tìm kiếm nâng cao (như AND, OR, \"phrase\", site:edu, filetype:pdf) để lọc bài báo khoa học.\n2. Lựa chọn 3 nguồn tài liệu học thuật khác nhau về chủ đề AI trong giáo dục.\n3. Tiến hành đánh giá từng nguồn dựa trên 5 tiêu chí của mô hình CRAAP (Currency, Relevance, Authority, Accuracy, Purpose).\n4. Xây dựng bảng so sánh điểm đánh giá tổng hợp.",
      
      product: {
        type: "table",
        pdfLink: "assets/pdfs/bai2_baocao.pdf",
        // Bảng dữ liệu đánh giá nguồn tin học thuật
        tableData: {
          headers: ["Nguồn Tài Liệu (Tác giả/Năm)", "Tính cập nhật (C)", "Mức độ liên quan (R)", "Thẩm quyền (A1)", "Độ chính xác (A2)", "Mục đích (P)", "Tổng điểm (CRAAP)"],
          rows: [
            ["Nguồn 1: Báo cáo AI trong Giáo dục (UNESCO, 2024)", "10/10", "10/10", "10/10", "9/10", "10/10", "49/50 (Rất đáng tin cậy)"],
            ["Nguồn 2: Nghiên cứu ứng dụng chatbot học tập (Nguyễn A, 2023)", "9/10", "9/10", "8/10", "8/10", "9/10", "43/50 (Đáng tin cậy)"],
            ["Nguồn 3: Bài blog cá nhân về mẹo dùng ChatGPT (TechBlog, 2025)", "10/10", "7/10", "5/10", "6/10", "5/10", "33/50 (Hạn chế sử dụng)"]
          ]
        },
        caption: "Bảng phân tích đánh giá chất lượng nguồn tin học thuật thực tế sử dụng thang điểm CRAAP."
      }
    },
    {
      id: 3,
      number: "Bài tập 3",
      code: "Mục 3.4 - Bài tập 2",
      title: "Viết Prompt hiệu quả cho các tác vụ học tập",
      shortDesc: "So sánh kỹ thuật thiết kế Prompt thô sơ và Prompt cải tiến ứng dụng mô hình AI.",
      objective: "Học cách tương tác tối ưu với Generative AI thông qua kỹ thuật prompt engineering (vai trò, ngữ cảnh, nhiệm vụ cụ thể, định dạng đầu ra) để nâng cao chất lượng phản hồi.",
      process: "1. Đưa ra một nhiệm vụ học tập cụ thể: Cần tóm tắt một chương sách khó.\n2. Thiết kế Prompt ban đầu (thô sơ) và ghi nhận kết quả phản hồi của AI.\n3. Áp dụng kỹ thuật đặt cấu trúc (Role - Context - Task - Format) để cải tiến Prompt và chạy lại.\n4. So sánh sự khác biệt lớn về chất lượng, độ chi tiết và cấu trúc của hai kết quả đầu ra.",
      
      product: {
        type: "prompt_compare",
        pdfLink: "assets/pdfs/bai3_baocao.pdf",
        comparison: {
          originalPrompt: "Hãy tóm tắt giúp tôi nội dung về an toàn thông tin mạng.",
          originalOutput: "Trí tuệ nhân tạo (AI) phản hồi một đoạn văn ngắn chung chung về việc đặt mật khẩu mạnh, tránh click link lạ và cập nhật phần mềm thường xuyên. Thông tin khá sơ sài, thiếu chiều sâu học thuật.",
          improvedPrompt: "Bạn là một chuyên gia Bảo mật thông tin kỳ cựu. Hãy tóm tắt chương sách về 'An toàn thông tin trong môi trường số học thuật' cho đối tượng sinh viên đại học. Hãy trình bày dưới dạng 3 luận điểm lớn rõ ràng: (1) Các mối đe dọa phổ biến, (2) Giải pháp bảo mật cá nhân, (3) Liêm chính học thuật số. Yêu cầu định dạng đầu ra là danh sách gạch đầu dòng kèm ví dụ thực tế.",
          improvedOutput: "AI phản hồi cực kỳ chi tiết, phân chia rõ ràng thành 3 mục lớn theo đúng yêu cầu. Mỗi mục đều có gạch đầu dòng phân tích kỹ các khái niệm tấn công giả mạo (phishing), lừa đảo mạng xã hội, phương thức bảo mật 2 lớp (2FA) và kèm ví dụ minh họa trực quan. Kết quả có tính ứng dụng cao và chuyên nghiệp."
        },
        caption: "So sánh hiệu quả trước và sau khi tối ưu hóa Prompt Engineering."
      }
    },
    {
      id: 4,
      number: "Bài tập 4",
      code: "Mục 4.4 - Bài tập 3",
      title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
      shortDesc: "Quản trị công việc nhóm bằng bảng Trello và phối hợp trực tuyến trên Google Drive.",
      objective: "Phát triển năng lực làm việc nhóm từ xa, làm quen với các công cụ Agile, quản lý tiến độ dự án trực quan và điều phối nguồn lực hiệu quả trong không gian số.",
      process: "1. Thành lập nhóm dự án và phân chia vai trò rõ ràng.\n2. Khởi tạo bảng công việc Trello (Trello Board) với các cột trạng thái: Cần làm (To-Do), Đang làm (In Progress), Đã hoàn thành (Done).\n3. Phân công nhiệm vụ cụ thể cho từng thành viên kèm theo thời hạn (Deadline).\n4. Chụp lại giao diện quản lý tiến độ thực tế để làm minh chứng.",
      
      product: {
        type: "collab_proof",
        pdfLink: "assets/pdfs/bai4_baocao.pdf",
        src: "assets/images/bai4_trello.png", // Ảnh chụp màn hình Trello/Notion của nhóm bạn
        caption: "Bằng chứng cộng tác trực tuyến: Giao diện quản lý dự án nhóm trên Trello.",
        details: {
          platform: "Trello / Google Drive / Slack",
          role: "Trưởng nhóm điều phối chung, phụ trách thiết lập và theo dõi deadline trên bảng Kanban.",
          workflow: "Họp nhóm trực tuyến qua Google Meet mỗi tối Chủ Nhật, phân chia tác vụ trên Trello và chia sẻ tài nguyên nghiên cứu trên thư mục chung Google Drive."
        }
      }
    },
    {
      id: 5,
      number: "Bài tập 5",
      code: "Mục 5.4 - Bài tập 2",
      title: "Sử dụng AI tạo sinh hỗ trợ sáng tạo nội dung",
      shortDesc: "Thiết kế sản phẩm đồ họa kỹ thuật số với sự trợ giúp của AI tạo sinh mỹ thuật.",
      objective: "Ứng dụng các công cụ AI tạo ảnh (Midjourney, DALL-E, Leonardo AI, Canva) để thiết kế sản phẩm đồ họa truyền thông sáng tạo, phục vụ dự án môn học hoặc cá nhân.",
      process: "1. Lên ý tưởng cho bức ảnh truyền thông: Chủ đề 'Đô thị tương lai xanh ứng dụng AI'.\n2. Viết câu lệnh mô tả chi tiết phong cách nghệ thuật, ánh sáng, màu sắc và góc chụp.\n3. Sử dụng công cụ AI để tạo ra các biến thể ảnh và tinh chỉnh hình ảnh cuối cùng bằng công cụ thiết kế.\n4. Đóng gói tác phẩm hoàn thiện và mô tả quá trình tương tác nghệ thuật với AI.",
      
      product: {
        type: "ai_content",
        pdfLink: "assets/pdfs/bai5_baocao.pdf",
        src: "assets/images/bai5_ai_art.png", // Tác phẩm do AI tạo sinh ra của bạn
        caption: "Sản phẩm đồ họa 'Đô thị xanh thông minh' do sinh viên đồng sáng tạo cùng AI tạo sinh.",
        details: {
          toolUsed: "Midjourney v6 & Canva Pro",
          aiPrompt: "/imagine prompt: A futuristic sustainable green city, integrated with eco-friendly smart towers, solar panels, vertical forests, clean energy public transport, cinematic lighting, photorealistic, 8k resolution, architectural design --ar 16:9",
          reflection: "AI giúp rút ngắn 80% thời gian lên phác thảo ý tưởng thiết kế. Việc phối hợp giữa ý tưởng sáng tạo của con người và năng lực dựng hình của AI đem lại sản phẩm có chất lượng thẩm mỹ vượt trội."
        }
      }
    },
    {
      id: 6,
      number: "Bài tập 6",
      code: "Mục 6.4 - Bài tập 4",
      title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      shortDesc: "Xây dựng bộ nguyên tắc đạo đức cá nhân khi khai thác và sử dụng các công cụ trí tuệ nhân tạo.",
      objective: "Nhận thức sâu sắc các vấn đề bản quyền, đạo văn, tính trung thực trong học thuật và xây dựng bản cam kết sử dụng công nghệ số một cách liêm chính.",
      process: "1. Tìm hiểu các vụ việc tranh chấp bản quyền và rủi ro đạo văn khi dùng nội dung do AI tạo ra.\n2. Phân tích quy định của nhà trường về liêm chính học thuật số.\n3. Tự đúc rút và viết ra 5 nguyên tắc cốt lõi của bản thân khi làm việc với AI.\n4. Ký cam kết số bằng chữ ký cá nhân trực quan trên văn bản.",
      
      product: {
        type: "principles",
        pdfLink: "assets/pdfs/bai6_baocao.pdf",
        caption: "Bản cam kết cá nhân: Quy tắc Đạo đức và Liêm chính khi sử dụng AI.",
        principles: [
          {
            title: "Nguyên tắc 1: Xác minh nguồn tin",
            desc: "Luôn kiểm chứng độ chính xác của mọi thông tin hoặc số liệu được cung cấp bởi AI thông qua các nguồn tài liệu khoa học chính thống trước khi đưa vào bài viết."
          },
          {
            title: "Nguyên tắc 2: Tôn trọng bản quyền & Ghi công",
            desc: "Tuyệt đối không sao chép nguyên văn phản hồi của AI để làm bài nộp cá nhân. Luôn ghi nhận (citation) rõ ràng sự hỗ trợ của công cụ AI cụ thể trong phần tài liệu tham khảo."
          },
          {
            title: "Nguyên tắc 3: Bảo mật dữ liệu",
            desc: "Không đăng tải các thông tin cá nhân nhạy cảm, mã nguồn bảo mật của tổ chức, hoặc dữ liệu chưa công bố lên các nền tảng AI công cộng."
          },
          {
            title: "Nguyên tắc 4: Không lạm dụng",
            desc: "Chỉ sử dụng AI làm trợ lý gợi ý ý tưởng, cấu trúc bài viết và tối ưu mã nguồn. Việc nghiên cứu, viết bài luận và rút ra kết luận chính phải do bản thân thực hiện."
          },
          {
            title: "Nguyên tắc 5: Học hỏi và cải tiến liên tục",
            desc: "Không ngừng tìm hiểu và nâng cao hiểu biết về các giới hạn, thiên kiến của AI để sử dụng công nghệ một cách thông thái và có trách nhiệm nhất."
          }
        ]
      }
    }
  ],

  // 3. TỔNG KẾT DỰ ÁN PORTFOLIO
  reflection: {
    experience: "Quá trình xây dựng trang Portfolio kỹ thuật số này là một hành trình đầy thú vị và thử thách đối với tôi. Thay vì chỉ làm các bài tập rời rạc nộp cho giảng viên, việc hệ thống hóa toàn bộ kết quả học tập vào một website cá nhân giúp tôi có cái nhìn tổng quan và hệ thống hơn rất nhiều về môn học Nhập môn Công nghệ số.",
    keyTakeaways: [
      {
        skill: "Kỹ năng Quản lý Dữ liệu khoa học",
        detail: "Cách sắp xếp thư mục và đặt tên tệp chuẩn hóa giúp công việc học tập hàng ngày trở nên gọn gàng, tăng tốc độ truy xuất thông tin."
      },
      {
        skill: "Làm chủ Kỹ thuật Prompt Engineering",
        detail: "Hiểu được cấu trúc ra lệnh cho AI để thu về kết quả chính xác, giảm thiểu hiện tượng 'ảo giác' thông tin của mô hình ngôn ngữ lớn."
      },
      {
        skill: "Tư duy Thiết kế & Phát triển Web",
        detail: "Ứng dụng HTML/CSS nâng cao để thiết kế giao diện Glassmorphism trực quan, hỗ trợ hiển thị tốt trên điện thoại và in báo cáo PDF sạch đẹp."
      },
      {
        skill: "Nâng cao Ý thức Liêm chính Học thuật",
        detail: "Tự lập ra các nguyên tắc đạo đức giúp bản thân sử dụng công nghệ như một trợ lý đắc lực thay vì phụ thuộc hoàn toàn một cách thụ động."
      }
    ],
    challenges: [
      {
        problem: "Quản lý thời gian học nhóm trực tuyến",
        solution: "Sử dụng Trello phân chia đầu việc chi tiết và đặt thông báo nhắc nhở qua Slack giúp nhóm hoàn thành đúng hạn mà không cần họp trực tiếp nhiều lần."
      },
      {
        problem: "Xuất dữ liệu web sang file PDF đẹp mắt",
        solution: "Đã thiết lập bộ lọc CSS Print Stylesheet riêng biệt cho lệnh in, tự động ẩn đi các nút điều hướng không cần thiết và căn lề trang in chuẩn chỉnh."
      }
    ],
    heartfeltWords: "Điều tôi tâm đắc nhất ở dự án này là việc kết hợp được kiến thức lý thuyết công nghệ số với khả năng lập trình thực tế, tạo ra một sản phẩm portfolio số có thể chạy trực tiếp trên trình duyệt web và xuất bản thành tài liệu PDF chuẩn chỉnh nộp bài. Đây sẽ là bước đệm lớn giúp tôi phát triển hơn nữa trong các học phần chuyên ngành tiếp theo."
  }
};
