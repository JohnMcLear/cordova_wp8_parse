/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.saveRecord = function(){
  // save a record
  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({magic: "bar"}).then(function(object) {
    alert("yay! it worked");
  });
}

app.queryRecord = function(){
  // query all records for a record that contains "magic"
  var TestObject = Parse.Object.extend("TestObject");
  var query = new Parse.Query(TestObject);
  query.equalTo("magic", "bar");
  query.find({
    success: function(results) {
      alert("worked fine");
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var string = object.get("magic");
        console.log(string);
      }
    },

    error: function(error) {
      alert("Query failed");
      // error is an instance of Parse.Error.
    }
  });
}
