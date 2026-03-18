import { ProductCard } from "../components/ProductCard";

const page = () => {
  const studentsInfo = [
    {
      name: "Э. Баасандорж",
      gender: "MALE",
      email: "baskaerka763@gmail.com",
      studentCode: "25BS65476",
    },
    {
      name: "Т. Нямбаяр",
      gender: "MALE",
      email: "yunoxsama00@gmail.com",
      studentCode: "25LP7381",
    },
    {
      name: "Л. Дөлгөөнзул",
      gender: "FEMALE",
      email: "dolgoonlkhagva@gmail.com",
      studentCode: "26BS86071",
    },
    {
      name: "Г. Номин",
      gender: "FEMALE",
      email: "gnomin200408@gmail.com",
      studentCode: "25BS52373",
    },
    {
      name: "Л. Нямочир",
      gender: "MALE",
      email: "nyamochir.lkhamkhvv@gmail.com",
      studentCode: "26BS98744",
    },
    {
      name: "М. Азноров",
      gender: "FEMALE",
      email: "azaamunkhtn@gmail.com",
      studentCode: "25LP1286",
    },
    {
      name: "Б. Билэгсайхан",
      gender: "MALE",
      email: "bbek3201@gmail.com",
      studentCode: "26BS83263",
    },
    {
      name: "Ш. Батмагнай",
      gender: "MALE",
      email: "sbatmagnai25@gmail.com",
      studentCode: "25LP6073",
    },
    {
      name: "Б. Чинзориг",
      gender: "MALE",
      email: "chinzoobatbold11@gmail.com",
      studentCode: "26BS13491",
    },
    {
      name: "Б. Гаажадамба",
      gender: "MALE",
      email: "gaajadamba@gmail.com",
      studentCode: "26BS25985",
    },
    {
      name: "О. Анударь",
      gender: "FEMALE",
      email: "anudariochiredene@gmail.com",
      studentCode: "26BS80134",
    },
    {
      name: "Б. Мөнх Оргил",
      gender: "MALE",
      email: "suusiibat@gmail.com",
      studentCode: "26BS63531",
    },
    {
      name: "К. Өрнүүн",
      gender: "MALE",
      email: "urnuun919@gmail.com",
      studentCode: "25BS21438",
    },
    {
      name: "Т. Батхүлэг",
      gender: "MALE",
      email: "t.khuleg@gmail.com",
      studentCode: "26BS38301",
    },
    {
      name: "Б. Цолмон",
      gender: "MALE",
      email: "btsolmon.mn@gmail.com",
      studentCode: "26BS11043",
    },
    {
      name: "А. Билгүүнтөгс",
      gender: "MALE",
      email: "bilgntgsamarbayr@gmail.com",
      studentCode: "26BS10652",
    },
    {
      name: "Ц. Номин Эрдэнэ",
      gender: "FEMALE",
      email: "nominerdenetsogtbaatar5@gmail.com",
      studentCode: "26BS60931",
    },
    {
      name: "Э. Номин Эрдэнэ",
      gender: "FEMALE",
      email: "ne78693@gmail.com",
      studentCode: "26BS42529",
    },
    {
      name: "А. Баярбилэг",
      gender: "MALE",
      email: "bayarbileg.am@gmail.com",
      studentCode: "26BS44296",
    },
    {
      name: "М. Темүүлэн",
      gender: "MALE",
      email: "azeroth0017@gmail.com",
      studentCode: "26BS99683",
    },
    {
      name: "Б. Баярцогт",
      gender: "MALE",
      email: "bayartsogt9998@gmail.com",
      studentCode: "26BS96881",
    },
    {
      name: "Б. Мянганнаст",
      gender: "MALE",
      email: "myngannast.b@gmail.com",
      studentCode: "26BS98039",
    },
  ];
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {studentsInfo.map((element, i) => {
        return (
          <ProductCard
            key={i}
            name={element.name}
            gender={element.gender}
            email={element.email}
            studentCode={element.studentCode}
          />
        );
      })}
      {/* <ProductCard
        name={"Э. Баасандорж"}
        gender={"male"}
        email={"baskaerka763@gmail.com"}
        studentCode={"25BS65476"}
      />
      <ProductCard
        name={"Т. Нямбаяр"}
        gender={"male"}
        email={"yunoxsama00@gmail.com"}
        studentCode={"25LP7381"}
      />
      <ProductCard
        name={"Л. Дөлгөөнзул"}
        gender={"female"}
        email={"dolgoonlkhagva@gmail.com"}
        studentCode={"26BS86071"}
      />
      <ProductCard 
        name={"Г. Номин"}
        gender={"female"}
        email={"gnomin200408@gmail.com"}
        studentCode={"25BS52373"}
      />
      <ProductCard
        name={"Л. Нямочир"}
        gender={"male"}
        email={"nyamochir.lkhamkhvv@gmail.com"}
        studentCode={"26BS98744"}
      />
      <ProductCard
        name={"М. Азноров"}
        gender={"female"}
        email={"azaamunkhtn@gmail.com"}
        studentCode={"25LP1286"}
      />
      <ProductCard
        name={"Б. Билэгсайхан"}
        gender={"male"}
        email={"bbek3201@gmail.com"}
        studentCode={"26BS83263"}
      />
      <ProductCard
        name={"Ш. Батмагнай"}
        gender={"male"}
        email={"sbatmagnai25@gmail.com"}
        studentCode={"25LP6073"}
      />
      <ProductCard
        name={"Б. Чинзориг"}
        gender={"male"}
        email={"chinzoobatbold11@gmail.com"}
        studentCode={"26BS13491"}
      />
      <ProductCard
        name={"Б. Гаажадамба"}
        gender={"male"}
        email={"gaajadamba@gmail.com"}
        studentCode={"26BS25985"}
      />
      <ProductCard
        name={"О. Анударь"}
        gender={"female"}
        email={"anudariochiredene@gmail.com"}
        studentCode={"26BS80134"}
      />
      <ProductCard
        name={"Б. Мөнх Оргил"}
        gender={"male"}
        email={"suusiibat@gmail.com"}
        studentCode={"26BS63531"}
      />
      <ProductCard
        name={"К. Өрнүүн"}
        gender={"male"}
        email={"urnuun919@gmail.com"}
        studentCode={"25BS21438"}
      />
      <ProductCard
        name={"Т. Батхүлэг"}
        gender={"male"}
        email={"t.khuleg@gmail.com"}
        studentCode={"26BS38301"}
      />
      <ProductCard
        name={"Б. Цолмон"}
        gender={"male"}
        email={"btsolmon.mn@gmail.com"}
        studentCode={"26BS11043"}
      />
      <ProductCard
        name={"А. Билгүүнтөгс"}
        gender={"male"}
        email={"bilgntgsamarbayr@gmail.com"}
        studentCode={"26BS10652"}
      />
      <ProductCard
        name={"Ц. Номин Эрдэнэ"}
        gender={"female"}
        email={"nominerdenetsogtbaatar5@gmail.com"}
        studentCode={"26BS60931"}
      />
      <ProductCard
        name={"Э. Номин Эрдэнэ"}
        gender={"female"}
        email={"ne78693@gmail.com"}
        studentCode={"26BS42529"}
      />
      <ProductCard
        name={"А. Баярбилэг"}
        gender={"male"}
        email={"bayarbileg.am@gmail.com"}
        studentCode={"26BS44296"}
      />
      <ProductCard
        name={"М. Темүүлэн"}
        gender={"male"}
        email={"azeroth0017@gmail.com"}
        studentCode={"26BS99683"}
      />
      <ProductCard
        name={"Б. Баярцогт"}
        gender={"male"}
        email={"bayartsogt9998@gmail.com"}
        studentCode={"26BS96881"}
      />
      <ProductCard
        name={"Б. Мянганнаст"}
        gender={"male"}
        email={"myngannast.b@gmail.com"}
        studentCode={"26BS98039"}
      /> */}
    </div>
  );
};
export default page;
