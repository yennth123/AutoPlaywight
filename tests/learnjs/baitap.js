Bài tập 1: Kiểm tra thông tin người dùng
Mô tả: Viết hàm nhận vào một chuỗi tên người dùng và kiểm tra xem tên người dùng có phải là "admin" hay không. Nếu có, trả về "Welcome admin", nếu không trả về "Welcome [tên người dùng]".
Kiến thức sử dụng: toLowerCase()

let name = user("Yến");
function user(name) {
  if (name.toLowerCase() === "admin") {    //=== là so sánh 
    console.log("Welcome admin");
  } else {
    console.log("Welcome, " + name);
  }
}


Bài tập 2: Chuyển đổi mã sản phẩm
Mô tả: Viết một hàm nhận vào mã sản phẩm (chuỗi) và trả về mã sản phẩm đó với tất cả các ký tự chữ hoa, giúp chuẩn hóa mã sản phẩm.
Kiến thức sử dụng: toUpperCase()

let a = produceCode('abc123');
function produceCode(a) {
    return a.toUpperCase();
  }
Bài tập 3: Xử lý chuỗi tìm kiếm
Mô tả: Viết một hàm sanitizeSearchString(str) nhận vào một chuỗi tìm kiếm và trả về chuỗi đã loại bỏ khoảng trắng ở đầu và cuối, giúp chuẩn bị cho việc tìm kiếm.
Kiến thức sử dụng: trim()

let str = "       Bài tập a b c    ";

function sanitizeSearchString(str) {
    return str.trim();
}
console.log(sanitizeSearchString(str));  // Output: "Bài tập a b c"

Bài tập 4: Lọc danh sách học viên
Mô tả: Viết một hàm nhận vào một danh sách các học viên (mảng các chuỗi) và trả về một danh sách mới chỉ chứa các học viên có tên bắt đầu bằng chữ cái "A".
Kiến thức sử dụng: filter()


let students = ["Anh" , "An", "Mai", "Hoa"];
function filterStudents(students) {
    return students.filter(function(student) {
      // Kiểm tra xem tên học viên có bắt đầu bằng chữ 'A' không
      return student[0].toUpperCase() === 'A';
    });
  }

  console.log(filterStudents(students)); //in ra output

Bài tập 5: Phân tích dữ liệu đơn giản
Mô tả: Viết hàm nhận vào một chuỗi số và phân tách chúng thành một mảng các số riêng biệt. Sau đó tính tổng của tất cả các số trong mảng.
Kiến thức sử dụng: split(), reduce()

  let nb = "10 30 40 50";
  function sum(nb){
    let numbers = nb.split (' ');
    let a= 0;
    for (let i = 0; i< numbers.length; i ++) {
        a = a + Number(numbers[i]);
    }
    return a;
  }
  console.log(sum(nb));

Bài tập 6: Tìm sản phẩm đắt nhất
Mô tả: Viết một hàm nhận vào một mảng các đối tượng sản phẩm, mỗi đối tượng chứa tên và giá. Hàm sẽ tìm sản phẩm có giá trị cao nhất và trả về tên của sản phẩm đó.
Kiến thức sử dụng: reduce()
let  products = [
  { name: 'Product A', price: 100 },
  { name: 'Product B', price: 200 },
  { name: 'Product C', price: 150 }
];
function priceProduct(products) {
  let highestProduct = products[0];
}
Bài tập 7: Duyệt qua danh sách tên
Mô tả: Viết một hàm nhận vào một mảng các tên và in ra từng tên theo định dạng "Hello, [tên]!".
Kiến thức sử dụng: forEach()

let names = ["Anh", "An", "Mai", "Hoa"];
function greetNames(names) {
    names.forEach(function(name) {
        console.log("Hello " + name+ "!");
    });
  }
  
console.log(greetNames(names));

Bài tập 8: Tính tổng điểm học sinh
Mô tả: Viết một hàm nhận vào một mảng các điểm thi của học sinh và trả về tổng điểm của tất cả học sinh.
Kiến thức sử dụng: reduce()
Bài tập 9: Kiểm tra sự tồn tại của từ khóa
Mô tả: Viết hàm isKeywordPresent(text, keyword) nhận vào một đoạn văn bản và một từ khóa, kiểm tra xem từ khóa có tồn tại trong đoạn văn bản không.
Kiến thức sử dụng: includes()
Bài tập 10: Tạo mảng số nguyên
Mô tả: Viết một hàm nhận vào một mảng số thực và trả về một mảng mới chỉ chứa các số nguyên từ mảng ban đầu.
Kiến thức sử dụng: filter()
Let arr =  [1.5, 2, 3.7, 4, 5.2, 6];
function filterIntegers(arr) {
  return arr.filter(num => Number.isInteger(num)); // Lọc các số nguyên
}
Console.log(filterIntegers(arr));
Bài tập 11: Tách số điện thoại
Mô tả: Viết một hàm nhận vào một chuỗi số điện thoại và tách nó thành các phần: mã quốc gia, mã vùng và số điện thoại.
Kiến thức sử dụng: split()
let phoneNumber = '+84 28 12345678'; 
function parsePhoneNumber(phoneNumber) {
  // Tách chuỗi theo dấu cách
  const parts = phoneNumber.split(' ');
//  tách chuỗi thành mảng parts = ['+84', '28', '12345678']

  // Lấy mã quốc gia, mã vùng và số điện thoại
  const countryCode = parts[0];  // parts[0] đại diện cho phần tử đầu tiên trong mảng sau khi chuỗi số điện thoại được tách bằng dấu cách.
  const areaCode = parts[1];
  const localNumber = parts[2];

  return { countryCode, areaCode, localNumber };
}
console.log(parsePhoneNumber(phoneNumber));
Bài tập 12: Tạo chuỗi mật khẩu
Mô tả: Viết một hàm tạo mật khẩu ngẫu nhiên dài 8 ký tự bao gồm chữ hoa, chữ thường và số. Hàm trả về mật khẩu tạo ra.
Kiến thức sử dụng: Math.random(), toUpperCase(), toLowerCase()

Bài tập 13: Kiểm tra ngày hợp lệ
Mô tả: Viết một hàm nhận vào chuỗi ngày tháng theo định dạng DD-MM-YYYY và kiểm tra xem ngày tháng có hợp lệ không.
Kiến thức sử dụng: Date()
let dateString = '05-05-2000';

function isValidDate(dateString) {
  // Tạo đối tượng Date từ chuỗi nhập vào
  const [day, month, year] = dateString.split('-');
  const date = new Date(year, month - 1, day);
  
  // Kiểm tra nếu ngày tháng hợp lệ
  return dateString === `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
}

console.log(isValidDate(dateString)); 
Bài tập 14: Tính tuổi từ ngày sinh
Mô tả: Viết hàm nhận vào ngày sinh của người dùng dưới dạng chuỗi và trả về tuổi của họ.
Kiến thức sử dụng: Date(), getFullYear()
Let birthDateString = ‘2000-05-05’ ;
function calculateAge(birthDateString) {
  return new Date().getFullYear() - new Date(birthDateString).getFullYear();
}
}
console.log(calculateAge(birthDateString));
Bài tập 16: Xử lý thông tin người dùng
Mô tả: Viết một hàm nhận vào thông tin người dùng gồm tên và email, chuẩn hóa tất cả các chữ cái trong tên thành chữ hoa và kiểm tra xem email có hợp lệ không.
Kiến thức sử dụng: toUpperCase(), includes()
let user = { name: "Nguyen Thi Hai Yên”, email: “yennguyen@gmail.com" };
function processUser(user) {
  // Chuẩn hóa tên thành chữ in hoa
  const upperName = user.name.toUpperCase();

  // Kiểm tra email có chứa '@' hay không
  const isValidEmail = user.email.includes("@");

  // Trả về kết quả
  if (isValidEmail) {
    return `Tên: ${upperName}, Email hợp lệ`;
  } else {
    return `Tên: ${upperName}, Email không hợp lệ`;
  }
}
console.log(processUser(user));
Bài tập 17: Xử lý thông báo
Mô tả: Viết một hàm nhận vào thông báo lỗi và kiểm tra nếu thông báo chứa từ khóa "Error". Nếu có, trả về "Critical Error"; nếu không trả về thông báo gốc.
Kiến thức sử dụng: includes()

let message = 'abc abc';

function checkError(message) {
  if (message.includes("Error")) {
    return "Critical Error";
  } else {
    return message;
  }
}

console.log(checkError(message));
Bài tập 18: Tính điểm trung bình
Mô tả: Viết một hàm nhận vào mảng các điểm thi của học sinh và tính điểm trung bình. Nếu điểm trung bình trên 8, in ra "Pass", nếu dưới 5, in ra "Fail", còn lại in "Review".
Kiến thức sử dụng: reduce()
let scores = [9, 8, 10, 7];

function evaluateScores(scores) {
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

  if (average > 8) {
    console.log("Pass");
  } else if (average < 5) {
    console.log("Fail");
  } else {
    console.log("Review");
  }
}
console.log (evaluateScores(scores) );