class Student {
  int id = 0;
  String name = "";
  String familyName = "";

  Student({this.id, this.name, this.familyName});

  factory Student.fromJson(Map<String, dynamic> json) {
    return Student(
        id: json['id'], name: json['name'], familyName: json['familyName']);
  }

  @override
  String toString() {
    return "[Student] " +
        this.id.toString() +
        " " +
        this.name +
        " " +
        this.familyName;
  }
}
