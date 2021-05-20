{
  // public

  class Base {
    public defaultAge = 0;
  }

  class Member extends Base {
    age = 0;

    public getAge() {
      // class 내부에서 age 변수에 접근 가능
      return this.age + this.defaultAge;
    }
  }

  let member = new Member();
  console.log(member.getAge()); /* class 외부에서 getAge() 접근 가능 */
}

{
  // private

  class Base {
    private birthYear = 2017;
  }

  class Member extends Base {
    private age = 0;

    private getBirthYear() {
      // return this.birthYear; 부모 클래스의 멤버 변수에 접근 불가
    }

    private getAge() {
      return this.age; /* class 내부에서는 private 멤버에 접근 가능 */
    }
  }

  let member = new Member();
  /*   
  private 속성의 멤버는 외부에서 접근 불가
  console.log(member.age);
  console.log(member.getAge()); */
}
