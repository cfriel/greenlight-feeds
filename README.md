greenlight-feeds
================
<routes xmlns="http://camel.apache.org/schema/spring">
<route>
  <from uri="twitter://search?type=polling&amp;delay=2&amp;keywords=ufc"></from>
  <to uri="log:tweet"></to>
  </route>
</routes>

<routes xmlns="http://camel.apache.org/schema/spring">
<route>
  <from uri="weather:foo?location=Madrid,Spain&amp;period=7 days"></from>
  <to uri="log:weather"></to>
  </route>
</routes>

<routes xmlns="http://camel.apache.org/schema/spring">
<route>
  <from uri="imaps://imap.gmail.com?username=greenlight.camel@gmail.com&amp;password=greenlight.camel.password&amp;delete=false&amp;unseen=true&amp;consumer.delay=60000"></from>
  <to uri="log:gmail"></to>
  </route>
</routes>

weather:foo?location=Madrid,Spain&period=7 days

imaps://imap.gmail.com?username=greenlight.camel@gmail.com&password=greenlight.camel.password&delete=false&unseen=true&consumer.delay=60000