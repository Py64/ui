var CLOUD_PLANS = {
  "realmNames": [
    {
      "id": "all",
      "name": "All",
      "translationKey": "realmNames.all"
    },
    {
      "id": "us-west",
      "name": "US West",
      "translationKey": "realmNames.usWest"
    },
    {
      "id": "us-east",
      "name": "US East",
      "translationKey": "realmNames.usEast"
    },
    {
      "id": "asia",
      "name": "asia",
      "translationKey": "realmNames.asia"
    },
    {
      "id": "eu-west",
      "name": "eu-west",
      "translationKey": "realmNames.euWest"
    },
    {
      "id": "eu-east",
      "name": "eu-east",
      "translationKey": "realmNames.euEast"
    },
  ],
  "realms": [
    {
      "id": "t1.micro.us.west-1",
      "displayName": "T1 Micro",
      "provider": "Amazon",
      "memory": "0.0613",
      "storage": "EBS-Only",
      "availabilityRealm": "us-west-1",
      "pricePerHour": "0.020",
      "pricePerMonth": "0.020",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t1.micro.us.west-2",
      "displayName": "T1 Micro",
      "provider": "Amazon",
      "memory": "0.0613",
      "storage": "EBS-Only",
      "availabilityRealm": "us-west-2",
      "pricePerHour": "0.020",
      "pricePerMonth": "0.020",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t2.micro.us.west-1",
      "displayName": "T2 Micro",
      "provider": "Amazon",
      "memory": "1.0",
      "storage": "EBS-Only",
      "availabilityRealm": "us-west-1",
      "pricePerHour": "0.015",
      "pricePerMonth": "0.015",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t2.micro.us.west-2",
      "displayName": "T2 Micro",
      "provider": "Amazon",
      "memory": "1.0",
      "storage": "EBS-Only",
      "availabilityRealm": "us-west-2",
      "pricePerHour": "0.015",
      "pricePerMonth": "0.015",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t2.nano.us.west-1",
      "displayName": "T2 Nano",
      "provider": "Amazon",
      "memory": "0.5",
      "storage": "EBS-Only",
      "availabilityRealm": "us-west-1",
      "pricePerHour": "0.008",
      "pricePerMonth": "0.008",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t2.nano.us.west-2",
      "displayName": "T2 Nano",
      "provider": "Amazon",
      "memory": "0.5",
      "storage": "EBS-Only",
      "availabilityRealm": "us-west-2",
      "pricePerHour": "0.008",
      "pricePerMonth": "0.008",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.sfo1-small",
      "displayName": "Small",
      "provider": "Digital Ocean",
      "memory": "512MB",
      "storage": "20",
      "availabilityRealm":"sfo1",
      "pricePerHour": "0.007439999841153622",
      "pricePerMonth": "5",
      "amazonPricing": false,
      "cpuRating": "4",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.sfo2-medium",
      "displayName": "Medium",
      "provider": "Digital Ocean",
      "memory": "1",
      "storage": "30",
      "availabilityRealm": "sfo2",
      "pricePerHour": "0.014879999682307243",
      "pricePerMonth": "10",
      "amazonPricing": false,
      "cpuRating": "4",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.sfo1-medium",
      "displayName": "Medium",
      "provider": "Digital Ocean",
      "memory": "1",
      "storage": "30",
      "availabilityRealm": "sfo1",
      "pricePerHour": "0.014879999682307243",
      "pricePerMonth": "10",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.sfo1-large",
      "displayName": "Large",
      "provider": "Digital Ocean",
      "memory": "2",
      "storage": "40",
      "availabilityRealm": "sfo1",
      "pricePerHour": "0.029759999364614487",
      "pricePerMonth": "20",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.sfo2-large",
      "displayName": "Large",
      "provider": "Digital Ocean",
      "memory": "2",
      "storage": "40",
      "availabilityRealm": "sfo2",
      "pricePerHour": "0.029759999364614487",
      "pricePerMonth": "20",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "packet.sjc1.baremetal_type0",
      "displayName": "Packet Type 0",
      "provider": "Packet",
      "memory": "8",
      "storage": "80",
      "availabilityRealm": "sjc1",
      "pricePerHour": "0.05",
      "pricePerMonth": "0.05",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "2Tb",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "packet.sjc1.baremetal_type1",
      "displayName": "Packet Type 1",
      "provider": "Packet",
      "memory": "32",
      "storage": "120",
      "availabilityRealm": "sjc1",
      "pricePerHour": "0.4",
      "pricePerMonth": "0.4",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "2Tb",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "packet.sjc1.baremetal_type2",
      "displayName": "Packet Type 2",
      "provider": "Packet",
      "memory": "256",
      "storage": "480",
      "availabilityRealm": "sjc1",
      "pricePerHour": "1.25",
      "pricePerMonth": "1.25",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "2Tb",
      "realm": 'us-west',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t1.micro.us.east-1",
      "displayName": "T1 Micro",
      "provider": "Amazon",
      "memory": "0.0613",
      "storage": "EBS-Only",
      "availabilityRealm": "us-east-1",
      "pricePerHour": "0.020",
      "pricePerMonth": "0.020",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t1.micro.us.east-2",
      "displayName": "T1 Micro",
      "provider": "Amazon",
      "memory": "0.0613",
      "storage": "EBS-Only",
      "availabilityRealm": "us-east-2",
      "pricePerHour": "0.020",
      "pricePerMonth": "0.020",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t2.micro.us.east-1",
      "displayName": "T2 Micro",
      "provider": "Amazon",
      "memory": "1.0",
      "storage": "EBS-Only",
      "availabilityRealm": "us-east-1",
      "pricePerHour": "0.015",
      "pricePerMonth": "0.015",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t2.micro.us.east-2",
      "displayName": "T2 Micro",
      "provider": "Amazon",
      "memory": "1.0",
      "storage": "EBS-Only",
      "availabilityRealm": "us-east-2",
      "pricePerHour": "0.015",
      "pricePerMonth": "0.015",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t2.nano.us.east-1",
      "displayName": "T2 Nano",
      "provider": "Amazon",
      "memory": "0.5",
      "storage": "EBS-Only",
      "availabilityRealm": "us-east-1",
      "pricePerHour": "0.008",
      "pricePerMonth": "0.008",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "t2.nano.us.east-2",
      "displayName": "T2 Nano",
      "provider": "Amazon",
      "memory": "0.5",
      "storage": "EBS-Only",
      "availabilityRealm": "us-east-2",
      "pricePerHour": "0.008",
      "pricePerMonth": "0.008",
      "amazonPricing": true,
      "cpuRating": "2",
      "diskRating": "1",
      "transfer": "None",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.nyc1-small",
      "displayName": "Small",
      "provider": "Digital Ocean",
      "memory": "512MB",
      "storage": "20",
      "availabilityRealm":"nyc1",
      "pricePerHour": "0.007439999841153622",
      "pricePerMonth": "5",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.nyc2-small",
      "displayName": "Small",
      "provider": "Digital Ocean",
      "memory": "512MB",
      "storage": "20",
      "availabilityRealm":"nyc2",
      "pricePerHour": "0.007439999841153622",
      "pricePerMonth": "5",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.nyc1-medium",
      "displayName": "Medium",
      "provider": "Digital Ocean",
      "memory": "1",
      "storage": "30",
      "availabilityRealm": "nyc1",
      "pricePerHour": "0.014879999682307243",
      "pricePerMonth": "10",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.nyc2-medium",
      "displayName": "Medium",
      "provider": "Digital Ocean",
      "memory": "1",
      "storage": "30",
      "availabilityRealm": "nyc2",
      "pricePerHour": "0.014879999682307243",
      "pricePerMonth": "10",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.nyc3-medium",
      "displayName": "Medium",
      "provider": "Digital Ocean",
      "memory": "1",
      "storage": "30",
      "availabilityRealm": "nyc3",
      "pricePerHour": "0.014879999682307243",
      "pricePerMonth": "10",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.nyc1-large",
      "displayName": "Large",
      "provider": "Digital Ocean",
      "memory": "2",
      "storage": "40",
      "availabilityRealm": "nyc1",
      "pricePerHour": "0.029759999364614487",
      "pricePerMonth": "20",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "do.nyc2-large",
      "displayName": "Large",
      "provider": "Digital Ocean",
      "memory": "2",
      "storage": "40",
      "availabilityRealm": "nyc2",
      "pricePerHour": "0.029759999364614487",
      "pricePerMonth": "20",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "Included",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "packet.ewr1.baremetal_type0",
      "displayName": "Packet Type 0",
      "provider": "Packet",
      "memory": "8",
      "storage": "80",
      "availabilityRealm": "ewr1",
      "pricePerHour": "0.05",
      "pricePerMonth": "0.05",
      "amazonPricing": false,
      "cpuRating": "2",
      "diskRating": "3",
      "transfer": "2Tb",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "packet.ewr1.baremetal_type1",
      "displayName": "Packet Type 1",
      "provider": "Packet",
      "memory": "32",
      "storage": "120",
      "availabilityRealm": "ewr1",
      "pricePerHour": "0.4",
      "pricePerMonth": "0.4",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "2Tb",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
    {
      "id": "packet.ewr1.baremetal_type2",
      "displayName": "Packet Type 2",
      "provider": "Packet",
      "memory": "256",
      "storage": "480",
      "availabilityRealm": "ewr1",
      "pricePerHour": "1.25",
      "pricePerMonth": "1.25",
      "amazonPricing": false,
      "cpuRating": "3",
      "diskRating": "3",
      "transfer": "2Tb",
      "realm": 'us-east',
      "instanceConfig": { // this will be the config that passes to the machine driver create
      }
    },
  ]
};
export default CLOUD_PLANS;
