class Skill {
  int id = 0;
  String name = "";

  Skill({this.id, this.name});

  factory Skill.fromJson(Map<String, dynamic> json) {
    return Skill(id: json['id'], name: json['name']);
  }

  @override
  String toString() {
    return "[Skill] " + this.id.toString() + " " + this.name;
  }
}
