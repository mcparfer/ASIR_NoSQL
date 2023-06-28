db.patients.drop()
db.patients.insertMany([
    {
        patient: "Norton Campbell",
        age: 19,
        weight_kg: 76.53,
        height_m: 1.75,
        blood_type: "0+",
        admision_date: new Date("2021-10-28T08:05:00Z"),
        discharge_date: new Date("2021-11-09T10:35:20Z"),
        assigned_staff: [ "Dr. Reznick", "Dr. Browne" ],
        medication: [
            { code: "033022", type: "tablet" },
            { code: "112233", type: "liquid" }
        ],
        full_recovery: true
    },
    { patient: "Ada Mesmer", age: 45, weight_kg: 68.43, height_m: 1.64, blood_type: "AB-", admision_date: new Date ( "2021-10-29T21:15:03Z" ), assigned_staff: "Dr. Park", medication: { code: "567890", type: "liquid" }, full_recovery: false },
    { patient: "Luca Balsa", age: 12, weight_kg: 39.20, height_m: 1.45, blood_type: "0-", admision_date: new Date ( "2021-10-02T19:12:56Z" ), discharge_date: new Date ( "2021-10-09T19:24:43Z" ), assigned_staff: [ "Dr. Lim" , "Dr. Browne" ], medication: { code: "888888", type: "injection" }, full_recovery: true },
    { patient: "Edgar Valden", age: 67, weight_kg: 92.21, height_m: 1.68, blood_type: "B+", admision_date: new Date ( "2021-10-13T17:23:13Z" ), discharge_date: new Date ( "2021-11-07T09:24:43Z" ), assigned_staff: "Dr. Shawn", medication: [ { code: "112233", type: "liquid" }, { code: "111111", type: "injection" } ], full_recovery: false },
    { patient: "Vera Nair", age: 45, weight_kg: 79.83, height_m: 1.74, blood_type: "0+", admision_date: new Date ( "2021-10-30T15:32:43Z" ), assigned_staff: [ "Dr. Browne" , "Dr. Reznick" , "Dr. Park" ], medication: { code: "066066", type: "tablet" }, full_recovery: false },
    { patient: "Kurt Frank", age: 32, weight_kg: 76.47, height_m: 1.86, blood_type: "A-", admision_date: new Date ( "2021-10-12T08:03:01Z" ), discharge_date: new Date ( "2021-10-12T13:21:20Z" ), assigned_staff: "Dr. Lim", medication: { code: "123456", type: "tablet" }, full_recovery: true },
    { patient: "Helena Adams", age: 23, weight_kg: 57.22, height_m: 1.69, blood_type: "A+", admision_date: new Date ( "2021-11-09T10:36:17Z" ), discharge_date: new Date ( "2021-11-12T12:56:12Z" ), assigned_staff: "Dr. Browne", medication: [ { code: "888888", type: "injection" }, { code: "556677", type: "liquid" } ], full_recovery: true },
    { patient: "William Ellis", age: 20, weight_kg: 86.43, height_m: 1.92, blood_type: "AB+", admision_date: new Date ( "2021-10-07T07:34:11Z" ), discharge_date: new Date ( "2021-10-16T13:37:12Z" ), assigned_staff: "Dr. Browne", medication: { code: "033022", type: "tablet" }, full_recovery: true },
    { patient: "Emma Woods", age: 8, weight_kg: 23.10, height_m: 1.23, blood_type: "A+", admision_date: new Date ( "2021-10-20T11:06:03Z" ), discharge_date: new Date ( "2021-11-06T10:19:35Z" ), assigned_staff: [ "Dr. Shawn" , "Dr. Park" , "Dr. Reznick" ], medication: { code: "112233", type: "liquid" }, full_recovery: false },
    { patient: "Fiona Gilman", age: 25, weight_kg: 64.32, height_m: 1.72, blood_type: "0-", admision_date: new Date ( "2021-10-29T01:56:24Z" ), discharge_date: new Date ( "2021-11-10T12:45:54Z" ), assigned_staff: "Dr. Lim", medication: [ { code: "111111", type: "injection" }, { code: "567890", type: "liquid" } ], full_recovery: true },
    { patient: "Eli Clark", age: 53, weight_kg: 114.22, height_m: 1.78, blood_type: "A+", admision_date: new Date ( "2021-11-07T12:29:37Z" ), assigned_staff: "Dr. Shawn", medication: { code: "033022", type: "tablet" }, full_recovery: false },
    { patient: "Aesop Carl", age: 25, weight_kg: 49.30, height_m: 1.76, blood_type: "AB+", admision_date: new Date ( "2021-10-07T06:56:24Z" ), discharge_date: new Date ( "2021-11-03T12:45:54Z" ), assigned_staff: "Dr. Browne", medication: [ { code: "123456", type: "tablet" }, { code: "888888", type: "injection" } ], full_recovery: true },
    { patient: "Tracy Jones", age: 18, weight_kg: 53.48, height_m: 1.65, blood_type: "B-", admision_date: new Date ( "2021-10-28T21:02:03Z" ), discharge_date: new Date ( "2021-11-03T20:04:06Z" ), assigned_staff: "Dr. Lim", medication: { code: "556677", type: "liquid" }, full_recovery: true },
    { patient: "Mike Morton", age: 16, weight_kg: 76.13, height_m: 1.81, blood_type: "AB-", admision_date: new Date ( "2021-11-14T23:58:45Z" ), assigned_staff: [ "Dr. Browne" , "Dr. Reznick" ], medication: { code: "033022", type: "tablet" }, full_recovery: false },
    { patient: "Ganji Gupta", age: 17, weight_kg: 79.47, height_m: 1.93, blood_type: "0+", admision_date: new Date ( "2021-10-30T00:07:00Z" ), discharge_date: new Date ( "2021-11-01T12:52:20Z" ), assigned_staff: "Dr. Reznick", medication: { code: "112233", type: "liquid" }, full_recovery: false },
    { patient: "Joseph Desaulnier", age: 58, weight_kg: 75.52, height_m: 1.82, blood_type: "0-", admision_date: new Date("2021-10-26T14:50:40Z"), discharge_date: new Date("2021-11-13T11:53:04Z"), assigned_staff: "Dr. Reznick", medication: [ { code: "033022", type: "tablet" }, { code: "112233", type: "liquid" } ], full_recovery: true },
    { patient: "Margaretha Zelle", age: 29, weight_kg: 49.63, height_m: 1.65, blood_type: "A-", admision_date: new Date("2021-11-01T15:23:32Z"), discharge_date: new Date("2021-11-03T10:54:24Z"), assigned_staff: "Dr. Browne", medication: { code: "111111", type: "injection" }, full_recovery: true },
    { patient: "Emily Dyer", age: 14, weight_kg: 42.34, height_m: 1.53, blood_type: "0+", admision_date: new Date("2021-10-23T16:06:20Z"), assigned_staff: "Dr. Melendez", medication: { code: "888888", type: "injection" }, full_recovery: false } ,
    { patient: "Melly Plinius", age: 6, weight_kg: 25.01, height_m: 1.11, blood_type: "AB+", admision_date: new Date("2021-11-28T09:15:03Z"), assigned_staff: [ "Dr. Shawn", "Dr. Browne" ], medication: [ { code: "033022", type: "tablet" }, { code: "556677", type: "liquid" } ], full_recovery: false },
    { patient: "Martha Behamfil", age: 10, weight_kg: 46.53, height_m: 1.38, blood_type: "B-", admision_date: new Date("2021-10-28T08:05:00Z"), assigned_staff: "Dr. Shawn", medication: { code: "111111", type: "injection" }, full_recovery: false },
] )
