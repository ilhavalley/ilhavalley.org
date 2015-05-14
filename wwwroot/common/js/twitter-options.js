jQuery(document).ready(function($) {

jQuery("#lasttweet").tweet({
  join_text: false,
  username: "ilhavalley", // Change username here
  modpath: './common/js/twitter/',
  avatar_size: false,
  count: 1,
  loading_text: "loading tweets...",
  seconds_ago_text: "%d segundos atrás",
  a_minutes_ago_text: "um minuto atrás",
  minutes_ago_text: "%d minutos atrás",
  a_hours_ago_text: "uma hora atrás",
  hours_ago_text: "%d horas atrás",
  a_day_ago_text: "um dia atrás",
  days_ago_text: "%d dias atrás",
  view_text: "ver tweet no twitter"
});

});
