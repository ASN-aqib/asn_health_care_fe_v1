/**
 * @author RIAZ JAFFARY
 */

export const WebConstants = {
  INT_ZERO: 0,
  INT_ONE: 1,
  INT_TWO: 2,
  INT_THREE: 3,
  INT_FOUR: 4,
  INT_FIVE: 5,
  ANDROID: "Android",
  IOS: "iOS",
  US: "US",
  UK: "UK",
  CA: "CA",
  OTHER: "Other",
  SECONDS_IN_A_DAY: 86400000,
  ORIGIN: "WEB",
  DEFAULT_HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  OCCUPY_STATUS: {
    OCCUPIED: "Occupied",
    UNOCCUPIED: "Unoccupied",
  },
  METHOD_TYPE: {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE"
  },
  DATE: {
    FORMAT_YYYY_MM_DD: "yyyy-MM-dd",
    FORMAT_MM_DD_YYYY: "MM-dd-yyyy",
    FORMAT_DD_MM_YYYY: "dd/MM/yyyy",
    DAYS_IN_WEEK: 6,
    LAST_DAY_OF_MONTH: 29,
    FORMAT_MMM_DD_YYYY: "MMM d, y",
    FORMAT_MM_DD_YYYY_HH_00_00: "MM-dd-yyyy HH:00:00",
    FORMAT_MM_DD_YYYY_HH_00: "MM-dd-yyyy HH:00",
    FORMAT_MM_DD_YYYY_HH_AM_PM: "MM-dd-yyyy hh a",
    FORMAT_HH_00_00: "HH:00:00"


    
  },
  USER: {
    LOGGED_IN: "LOGGED_IN_USER", //"currentUser",
    ID: "CITS_CD_USER_ID",
    ORGANIZATION_ID: "CITS_CD_ORGANIZATION_ID",
    TOKEN: "CITS_CD_USER_TOKEN",
    AUTHORITIES: "CITS_CD_AUTHORITIES",
  },
  USER_ROLE: {
    SUPER_ADMIN: "ROLE_SUPER_ADMIN",
    ADMIN: "ROLE_ADMIN",
    MANAGER: "ROLE_MANAGER",
    PEO: "ROLE_PEO",
    USER : "PAGE_PRIVILEGE_USER",
    PARKING_SPOT : "PAGE_PRIVILEGE_PARKING_SPOT",
    MAP : "PAGE_PRIVILEGE_MAP",
    DASHBOARD : "PAGE_PRIVILEGE_DASHBOARD",
    REPORT : "PAGE_PRIVILEGE_REPORT",
    ADMIN_SEARCH : "PAGE_PRIVILEGE_ADMIN_SEARCH",
    SYSTEM_HEALTH : "PAGE_PRIVILEGE_SYSTEM_HEALTH",
    PARKING_ZONE : "PAGE_PRIVILEGE_PARKING_ZONE",
    ORGANIZATION : "PAGE_PRIVILEGE_ORGANIZATION",
    PREFERENCE : "PAGE_PRIVILEGE_PREFERENCE",
    PRIVILEGE : "PAGE_PRIVILEGE_PRIVILEGE",
    ROLE : "PAGE_PRIVILEGE_ROLE"


  },
  STATUS: {
    CODE_SUCCESS: 0,
    MSG_SUCCESS: "success",
    CODE_NOTFOUND: 404,
    MSG_NOTFOUND: "not found",
    CODE: {
      ACTIVE: 1,
      INACTIVE: 0,
    },
    MSG: {
      ACTIVE: "Active",
      INACTIVE: "Inactive",
    },
  },
  ERROR: {
    UNDEFINED_INTERNAL_SERVER: "Internal server error undefined",
    INTERNAL_SERVER: "Internal server error"
  },
  GRAPH: {
    ACTION_TYPE: {
      DAILY: "DAILY",
      WEEKLY: "WEEKLY",
      MONTHLY: "MONTHLY",
      DATE_RANGE: "DATE_RANGE",
    },
    ACTION_TYPE_DAILY: "DAILY",
    ACTION_TYPE_WEEKLY: "WEEKLY",
    ACTION_TYPE_YEARLY: "YEARLY",

    ACTION_TYPE_MONTHLY: "MONTHLY",
    ACTION_TYPE_DATE_RANGE: "DATE_RANGE",
    ACTION_TYPE_DATE_RANGE_GENERAL_CAPACITY: "DATE_RANGE_GENERAL_CAPACITY",
    ACTION_TYPE_DATE_RANGE_EXPIRED_COUNT: "DATE_RANGE_EXPIRED_COUNT",
    ACTION_TYPE_TIME_RANGE_REPORT: "TIME_RANGE_REPORT",
    ACTION_TYPE_TIME_EXPIRED: "TIME_RANGE_EXPIRED_COUNT",
    ACTION_TYPE_COLOR:"CLICK"
  },
  ACTION_TAKEN: {
    TICKET: "TICKET",
    VEHICLE_LEFT: "VEHICLE_LEFT",
    WARNING_GIVEN: "WARNING_GIVEN",
    PERMIT: "PERMIT",
    PEO_NOT_AVAILABLE: "PEO_NOT_AVAILABLE",
    TICKET_VALUE: "Ticket",
    VEHICLE_LEFT_VALUE: "Vehicle Left",
    WARNING_GIVEN_VALUE: "Warning Given",
    PERMIT_VALUE: "Permit",
    PEO_NOT_AVAILABLE_VALUE: "Peo not available"
  },
  SPOT_STATUS: {
    OCCUPIED: "Occupied",
    UNOCCUPIED: "Unoccupied"
  },
  //=========================================== Open Project ID # 415 start from here   ====================================//

  PARKING_TYPE:{
    PARKING_TYPE_GENERAL: "General",
    PARKING_TYPE_GENERAL_ID: 5,

    PARKING_TYPE_TOTAL: "Total",
    PARKING_TYPE_TOTAL_ID: 0,
    
    PARKING_TYPE_PATIENT: "Patient",
    PARKING_TYPE_PATIENT_ID: 1,

    PARKING_TYPE_RESERVED: "Reserved",
    PARKING_TYPE_RESERVED_ID: 2,

    PARKING_TYPE_VALET: "Valet",
    PARKING_TYPE_VALET_ID: 3,

    PARKING_TYPE_PWD: "Persons with Disabilities",
    PARKING_TYPE_PWD_ID: 4,

  },
  //=============================================== Open Project ID # 415 end here================================//

  API_URL: {
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/logout",
    USER: {
      FIND_ALL: "/api/user/find-all",
      ADD_USER: "/api/user/create",
      UPDATE_USER: "/api/user/update-user",
      DELETE_USER: "/api/user/delete-user/",
      FIND_USER_BY_ID: "/api/user/find-user-by-id/",
      FIND_ALL_USER_BY_ORGANIZATION: "/api/user/find-by-organizaton/",
      FORGOT_PASSWORD: "/api/user/forgot",
      FORGOT_EMAIL_ADDRESS: "/api/user/forgot-email-address",
      VERIFY_RESET_TOKEN: "/api/user/verify-reset-token",
      RESET_PASSWORD: "/api/user/reset-password",
      CHANGE_PASSWORD: "/api/user/change-password",
      PROFILE: "",
      TERMINATE_USER: "",
      FIND_USER_PRIVILEGES: "/api/userprivilege/findUserPrivilegesByUserId/",
      ADD_USER_PRIVILEGE: "/api/userprivilege/add",
      DELETE_USER_PRIVILEGE: "/api/userprivilege/deleteUserPrivilegeByUserIdAndPrivId/",
    },
    PROFILE: {
      FIND_ALL: "/api/profile/find-all",
      FIND_ALL_PRIVILEGE_BY_USER: "/api/privilege/find-privilege-by-user/",
    },
    ROLE: {
      FIND_ALL_ROLES: "/api/role/find-all",
      FIND_ALL_PRIVILEGES: "/api/privilege/find-all-privileges",
      FIND_BY_ID: "/api/role/find-by-Id",
      FIND_MENU_BY_PRIVILEGE_ID: "/api/menu/privilege/find-by-privilege-id",
      ADD_MENU: "/api/menu/privilege/add",
      UPDATE_MENU: "/api/menu/privilege/update",
      ADD_ROLE: "/api/role/create",
      UPDATE_PRIVILEGE: "/api/privilege/update"
    },
    DESIGNATION: {
      FIND_ALL_DESIGNATIONS: "/api/role/find-all-org-roles"
    },
    ORGANIZATION: {
      FIND_DETAIL: "/api/organization/find-detail/",
      FIND_ALL_ORGANIZATION: "/api/organization/find-all",
      ADD_ORGANIZATION: "/api/organization/add",
      UPDATE_ORGANIZATION: "/api/organization/update",
      DELETE_ORGANIZATION: "/api/organization/delete/",
      FIND_ORGANIZATION_BY_ID: "/api/organization/find/",
    },
    PARKING_SPOT: {
      FIND_ALL_PARKING_SPOT: "/api/parkingspot/find-all",
      ADD_PARKING_SPOT: "/api/parkingspot/add",
      UPDATE_PARKING_SPOT: "/api/parkingspot/update",
      DELETE_PARKING_SPOT: "/api/parkingspot/delete/",
      UPDATE_RESERVED_PARKING_SPOT: "/api/parkingspot/update-reserved-parking",
      FIND_PARKING_SPOT_BY_ID: "/api/parkingspot/findById/",
      FILE_UPLOADER_PARKING_SPOT: "/api/parkingspot/upload",
      FIND_ALL_PARKING_SPOT_BY_DEALER_ID: "/api/parkingspot/findbydealerId/",
      FIND_PARKING_SPOT_BY_ORGANIZATION: "/api/parkingspot/findbyOrgId/",
      FIND_RESERVED_PARKING_SPOT: "/api/parkingspot/find-reserved-parking-spot/",
      FIND_ALL_SPOT_TYPES: "/api/parkingspot/find-all-spot-type/",
    },
    USER_PARKING_SPOT: {
      FIND_ALL_PARKING_SPOT: "/api/user-parkingspot/find-all",
      ADD_PARKING_SPOT: "/api/user-parkingspot/add",
      UPDATE_PARKING_SPOT: "/api/user-parkingspot/update",
      DELETE_PARKING_SPOT: "/api/user-parkingspot/delete/",
      FIND_PARKING_SPOT_BY_ID: "/api/user-parkingspot/findById/",
      FILE_UPLOADER_PARKING_SPOT: "/api/user-parkingspot/upload",
      FIND_LOGS_BY_PARKING_SPOT: "/api/parkingspotlogs/find-by-parkingspotId/"
    },
    PARKING_ZONE: {
      ADD: "/api/parkingzone/add",
      UPDATE: "/api/parkingzone/update",
      DELETE: "/api/parkingzone/delete",
      FIND_BY_ID: "/api/parkingzone/find",
      FIND_ALL: "/api/parkingzone/find",
    },

     TRANSACTION: {
      ADD: "/api/parkingzone/add",
      UPDATE: "/api/parkingzone/update",
      DELETE: "/api/parkingzone/delete",
      FIND_BY_ID: "/api/parkingzone/find",
      FIND_ALL: "/api/transaction/find-all",
    },
    DASHBOARD:{
      
      
      LIVE_BIDDING: "/api/dashboard/find-all",
      LIVE_TRADING: "/api/dashboard/find-all-live-trans",

      PARKING_UTILIZATION_COUNT_ALL_ZONES: "/api/dashboard/find-utilization-count-by-All-Zones",
      PARKING_UTILIZATION_COUNT_AVAILABLE: "/api/dashboard/find-utilization-count-available",
      PEAK_OCCUPIED_TIME: "/api/dashboard/find-utilization-count-by-Zones-for-Graph/",
      PEAK_OCCUPIED_TIME_1: "/api/dashboard/find-utilization-count-by-Zones-for-Graph1/",

      PEAK_AVAILABLE_TIME: "/api/dashboard/find-available-count-by-Zones-for-Graph/",
      PEAK_AVAILABLE_TIME_1: "/api/dashboard/find-available-count-by-Zones-for-Graph1/",

   //=========================================== Open Project ID # 415 start from here   ====================================//
      AVG_TURNOVER: "/api/dashboard/find-turn-over-average/",
      AVG_TURNOVER_GENERAL: "/api/dashboard/find-turn-over-average-general/",
      AVG_TURNOVER_PATIENT: "/api/dashboard/find-turn-over-average-patient/",
       AVG_TURNOVER_BY_DateRange_SPOTTYPEID: "/api/dashboard/find-turn-over-average-data-by-date-range",
       AVG_TURNOVER_BY_SPOTTYPEID: "/api/dashboard/find-turn-over-average-data-by-spotTypeId/"
//=============================================== Open Project ID # 415 end here================================//

    },
    MAP: {
      SESSION_EXPIRED_ACTION: "/api/map/session-expired-action",
      FIND_ALL_PARKING_SPOT: "/api/map/find-all-parking-spot",
      FIND_ALL_PARKING_SPOT_1: "/api/map/find-all-parking-spot_1",

      FIND_ALL_PARKING_SPOT_AVAILABLE_1: "/api/map/find-all-parking-spot_available_1",

      FIND_ALL_PARKING_SPOT_V2: "/api/map/find-all-parking-spot-v2",
      FIND_CURRENT_SESSIONS: "/api/map/find-current-sessions",
      FIND_CURRENT_SESSIONS_1: "/api/map/find-current-sessions1",

      FIND_OCCUPIED_SESSIONS: "/api/map/find-all-occupied-sessions",
      FIND_OCCUPIED_SESSIONS_1: "/api/map/find-all-occupied-sessions_1",

      FIND_EXPIRED_SESSIONS: "/api/map/find-expired-sessions",
      SAVE_SESSIION_ACTION: "/api/map/save-session-expired-action",
      UPDATE_SESSIION_ACTION: "/api/map/update-session-expired-action",
      ADMIN_SEARCH_ALL : "api/admin/search",
      PEO_UPDATE_SESSION_DETAIL: "/api/map/admin/report/update-session-detail-by-peo",
      GET_ALL_ZONE_DATA: "/api/map/find-all-zone-count",
      ACTION: {
        SAVE_SESSIION: "/api/map/v2/save-session-expired-action",
        UPDATE_SESSIION: "/api/map/v2/update-session-expired-action",
      }
    },
    SIGNAGE: {
      GET_ALL_SIGNAGE_COUNT: "/api/signage/find-all-signage-count",
      GET_ALL_COMBINE_SIGNAGE: "/api/signage/find-combine-signage",


    },
    DEALER: {
      FIND_ALL_DEALER: "/api/dealer/find-all",
      ADD_DEALER: "/api/dealer/add",
      UPDATE_DEALER: "/api/dealer/update",
      DELETE_DEALER: "/api/dealer/delete/",
      FIND_DEALER_BY_ORGANIZATION: "/api/dealer/findDealerByOrgId/",
    },
    GEOFENCE: {
      FIND_ALL_GEOFENCE: "/api/geofence/find-all",
      ADD_GEOFENCE: "/api/geofence/add",
      UPDATE_GEOFENCE: "/api/geofence/update",
      DELETE_GEOFENCE: "/api/geofence/delete/",
      FILE_UPLOADER_GEOFENCE: "",
      FIND_GEOFENCE_BY_ORGANIZATION: "/api/geofence/findbyOrgId/",
    },
    GEOFENCE_DETAIL: {
      FIND_ALL_GEOFENCE_DETAIL: "/api/geofencedetail/find-all",
      ADD_GEOFENCE_DETAIL: "/api/geofencedetail/add",
      UPDATE_GEOFENCE_DETAIL: "/api/geofencedetail/update",
      DELETE_GEOFENCE_DETAIL: "/api/geofencedetail/delete/",
      GEOFENCE_DETAIL_FIND_BY_GEOFENCE_ID: "/api/geofencedetail/find-all-By-GeofenceId/",
    },
    VEHICLE: {
      FIND_ALL_VEHICLE: "/api/vehicle/find-all",
      ADD_VEHICLE: "/api/vehicle/add",
      UPDATE_VEHICLE: "/api/vehicle/update",
      DELETE_VEHICLE: "/api/vehicle/delete/",
      FIND_ALL_BY_DEALER_ID: '/api/vehicle/findbydealerId/',
      FILE_UPLOADER_VEHICLE: "",
      FIND_VEHICLE_BY_ORGANIZATION: "/api/vehicle/findbyOrgId/",
      FIND_ALL_WITH_DEVICE: "/api/vehicle/find-allwithdevice",
      FIND_ALL_VEHICLE_WITH_LAST_LAT_LNG: "/api/vehicle/find-allvehicleswithlastlatlng"
    },
    DEVICE: {
      FIND_ALL_DEVICE: "/api/device/find-all",
      ADD_DEVICE: "/api/device/add",
      UPDATE_DEVICE: "/api/device/update",
      DELETE_DEVICE: "/api/device/delete/",
      FILE_UPLOADER_DEVICE: "",
      FIND_DEVICE_BY_ORGANIZATION: "/api/device/findbyOrgId/",
      FIND_ALL_DEVICE_TYPE: "/api/devicetype/find-all",
    },
    SENSOR: {
      FIND_ALL_SENSOR: "",
      ADD_SENSOR: "/api/sensor/add",
      UPDATE_SENSOR: "",
      DELETE_SENSOR: "/api/sensor/delete/",
      FIND_ALL_SENSOR_TYPE: "/api/sensortype/find-all",
      FIND_ALL_SENSOR_BY_DEVICE_ID: "/api/sensor/findSenorByDeviceId/",
    },
    DEVICE_ALERT: {
      FIND_ALL_DEVICE_ALERT: "/api/devicealert/find-all",
      ADD_DEVICE_ALERT: "/api/devicealert/add",
      UPDATE_DEVICE_ALERT: "/api/devicealert/update",
      DELETE_DEVICE_ALERT: "/api/devicealert/delete/",
      FIND_DEVICE_ALERT_BY_ORGANIZATION: "/api/devicealert/findbyOrgId/",
    },
    GPS_TRACKER: {
      FIND_BY_DEV_EUI: "/api/gpstracker/findbydevEui/",
      FIND_ALL_TRACKER_LAST_LAT_LNG: "/api/gpstracker/find-all",
    },
    SMS_WHITE_LIST: {
      ADD_USER_TO_WHITE_LIST: "/api/whitelist/add",
      DELETE_USER_TO_WHITE_LIST: "/api/whitelist/delete/",
      FIND_ALL_USERS_IN_WHITE_LIST: "/api/whitelist/find-all"
    },
    HEALTH : {
      FIND_ALL_HEALTH_STATUS: "/api/healthStatus/find-all",
      FIND_ALL_REPORT_DATA : "/api/report/health-report-data-v3",
      FIND_ALL_HEALTH_REPORT : "/api/report/get-health-data",
      UPDATE_HEALTH_STATUS : "/api/healthStatus/update",
      FIND_HEALTH_DETAILS_BY_DEVEUI : "/api/report/get-health-detail-data",
    },
    REPORT: {
      FIND_PARKINGSPOT_COUNT_BY_PARKINGSPOT_TYPE_ID : "/api/parkingspot/find-count-by-parking-type",
      FIND_AVG_OCCUPANCY_BY_ZONE_ID :"/api/report/find-avg-occupancy-by-zone",
      FIND_REPORT_BY_MONTH: "/api/geofence-activity/findbymonth/",
      FIND_REPORT_DETAIL_BY_DATE: "/api/geofence-activity/finddetailbydate/",
      FIND_REPORT_BY_DATERANGE: "/api/geofence-activity/findbydaterange/",
      FIND_REPORT_BY_DAILY: "/api/geofence-activity/findbydaily/",
      FIND_REPORT_BY_WEEK: "/api/geofence-activity/findbyweek/",
      EXPIRED_SESSION_COUNT: "/api/report/expired-session-count",
      FIND_EXPIRED_SESSION_COUNT: "/api/report/find-expired-sessions-count",
      FIND_EXPIRED_SESSION_DETAIL: "/api/report/find-expired-session-detail",
      EXPIRED_SESSION_DATA_TABLE: "/api/report/expired-session-data-table",
      UTILIZATION_COUNT: "/api/report/utilization-count",
      UTILIZATION_COUNT_DATA_TABLE: "/api/report/utilization-count-data-table",
      UTILIZATION_HOUR: "/api/report/utilization-hour",
      UTILIZATION_HOUR_DATA_TABLE: "/api/report/utilization-hour-data-table",
      HOURLY_COUNT: "/api/report/hourly-count",
      HOURLY_COUNT_DATA_TABLE: "/api/report/hourly-count-data-table",
      PEO_TEAM_PERFORMANCE: "/api/report/peo-team-performance",
      PEO_TEAM_PERFORMANCE_DATA_TABLE: "/api/report/peo-team-performance-data-table",
      TICKET_ISSUED: "/api/report/find-daily-ticket-count",
      TICKET_ISSUED_DATA_TABLE: "/api/report/find-daily-ticket-count-data-table",
      ACTION_NOT_TAKEN: "/api/report/find-action-not-taken",
      ACTION_NOT_TAKEN_DETAIL: "/api/report/find-action-not-taken-detail",
      PAST_ACTION_DETAIL: "/api/report/find-past-action-detail",
      MONTHLY: {
        FIND_PARKING_SESSION_COUNT: "/api/monthly/report/parking-session-count",
        FIND_ABSOLUTE_PARKING_UTILIZATION: "/api/monthly/report/absolute-parking-utilization",
        FIND_AVERAGE_PARKING_UTILIZATION: "/api/monthly/report/average-parking-utilization",
        FIND_WEEKDAYS_AVERAGE_DURATION: "/api/monthly/report/weekdays-average-duration",
        FIND_WEEKENDS_AVERAGE_DURATION: "/api/monthly/report/weekends-average-duration",
        FIND_SPOT_SESSION_COUNT: "/api/monthly/report/spot-session-count",
        FIND_SPOT_SESSION_DURATION: "/api/monthly/report/spot-session-duration",
        FIND_APP_METRICS: "/api/monthly/report/find-app-metrics",
        FIND_STORE_METRICS: "/api/monthly/report/find-store-metrics",
        FIND_TOTAL_SESSIONS: "/api/monthly/report/find-app-metrics"
      }
    },
    EXCEL: {
      FIND_EXPIRED_SESSION_COUNT: "/api/excel/find-expired-session-count",
      FIND_OCCUPANCY_COUNT: "/api/excel/find-occupancy-count",
      FIND_OCCUPANCY_HOUR: "/api/excel/find-occupancy-hour",
      FIND_OCCUPANCY_TIME_COUNT: "/api/excel/find-occupancy-time-count",
      FIND_PEO_ACTION: "/api/excel/find-peo-action",
      FIND_DAILY_TICKET_ISSUED: "/api/excel/find-daily-ticket-issued",
      FIND_ACTION_NOT_TAKEN_DETAIL: "/api/excel/find-action-not-taken-detail",
      FIND_OCCUPANCY_DAY_COUNT: "/api/user-report-excel/find-occupancy-day-count",
      FIND_OCCUPANCY_HOURLY_COUNT: "/api/user-report-excel/find-occupancy-hourly-count",
      GET_OCCUPANCY_DAY_COUNT: "/api/report-excel/find-occupancy-day-count",
      GET_OCCUPANCY_HOURLY_COUNT: "/api/report-excel/find-occupancy-hourly-count"
    },
    REGISTRATION: {
      FIND_ALL_REGISTRATION: "/api/registration/find-all",
      ADD_REGISTRATION: "/api/registration/add",
      UPDATE_REGISTRATION: "/api/registration/update",
      DELETE_REGISTRATION: "/api/registration/deletebyId/",
      FIND_REGISTRATION_BY_ID: "/api/registration/findById/"
    },
    
    PREFERENCES: {
      FIND_ALL_PREFERENCES: "/api/preference/find-all",
      ADD_PREFERENCES: "/api/preference/add",
      UPDATE_PREFERENCES: "/api/preference/update",
      DELETE_PREFERENCES: "/api/preference/delete/",
    },
    BIDDING: {
      LIIV_BIDDING: "/api/seller/find-all"
    },
    USER_ACTIVITY: {
      FIND_ALL: "/api/useractivity/find-all",
      SMS_ALERTS_DELETE: "/api/sms/delete"
    },
    USER_GUIDANCE: {
      SEARCH: "/api/user/guidance/search"
    }
  },
  WEB_URL: {
    HOME: "login",
    LOGIN: "login",
    DASHBOARD: "dashboard",
    ROLE: "role",
    USER: "user",
    FORGOT_USERNAME: "forget-username",
    USER_PROFILE: "user/user-profile",
    CHANGE_PASSWORD: "user/change-password",
    ORGANIZATION: "organization",
    DEALER: "dealer",
    GEOFENCE: "geofence",
    GEOFENCE_DETAIL: "geofence/geofence-detail",
    PARKING_SPOT: "parking-spot",
    VEHICLE: "vehicle",
    DEVICE: "device",
    DEVICE_ALERT: "device/device-alert",
    MAP: "map",
    MAP_VIEW: "map/map-view",
    DEVICE_MATRICS: "dashboard/device-metrics",
    REAL_TIME_MONITORING: "dashboard/rtmonitoring",
    REPORT: "report",
    REGISTRATION: "registration",
    HISTORY_MAP: "map/history-map",
    ALERTS: "/user-guidance-alert"
  },
  WEB_SOCKET: {
    ENDPOINT: {
      WEB_NOTIFICATON: "/web-notification"
    },
    TOPIC: {
      MAP: "",
      RTM_NOTIFICATION: "/topic/rtmonitoring-notification",
      DEVICE_METRICS: "",
      SENSOR: "",
      WEB_NOTIFICATION: "/topic/web-notification",
      PARKING_SPOT_NOTIFICATION: "/topic/parkingspot-notification",
      MAP_ACTION_NOTIFICATION: "/topic/map-action-notification",
      SESSION_EXPIRED_NOTIFICATION: "/topic/session-expired-notification",
     
      // SIGNAGE_NOTIFICATION: "/topic/signage-notification", 
      REPORT_NOTIFICATION: ""
    },
    PAYLOAD_TYPE: {
      MESSAGE: "MESSAGE"
    }
  }
};
