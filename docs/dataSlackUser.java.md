# `dataSlackUser` Submodule <a name="`dataSlackUser` Submodule" id="@skeptools/provider-slack.dataSlackUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSlackUser <a name="DataSlackUser" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/d/user slack_user}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.slack.data_slack_user.DataSlackUser;

DataSlackUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .queryType(java.lang.String)
    .queryValue(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.queryType">queryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.queryValue">queryValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.queryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}.

---

##### `queryValue`<sup>Required</sup> <a name="queryValue" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.queryValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.slack.data_slack_user.DataSlackUser;

DataSlackUser.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.has2Fa">has2Fa</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isAdmin">isAdmin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isBot">isBot</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isOwner">isOwner</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.realName">realName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryTypeInput">queryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValueInput">queryValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryType">queryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValue">queryValue</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `has2Fa`<sup>Required</sup> <a name="has2Fa" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.has2Fa"></a>

```java
public IResolvable getHas2Fa();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isAdmin"></a>

```java
public IResolvable getIsAdmin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isBot`<sup>Required</sup> <a name="isBot" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isBot"></a>

```java
public IResolvable getIsBot();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isOwner`<sup>Required</sup> <a name="isOwner" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isOwner"></a>

```java
public IResolvable getIsOwner();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `realName`<sup>Required</sup> <a name="realName" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.realName"></a>

```java
public java.lang.String getRealName();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryTypeInput"></a>

```java
public java.lang.String getQueryTypeInput();
```

- *Type:* java.lang.String

---

##### `queryValueInput`<sup>Optional</sup> <a name="queryValueInput" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValueInput"></a>

```java
public java.lang.String getQueryValueInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

---

##### `queryValue`<sup>Required</sup> <a name="queryValue" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValue"></a>

```java
public java.lang.String getQueryValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSlackUserConfig <a name="DataSlackUserConfig" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.slack.data_slack_user.DataSlackUserConfig;

DataSlackUserConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .queryType(java.lang.String)
    .queryValue(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryType">queryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryValue">queryValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}.

---

##### `queryValue`<sup>Required</sup> <a name="queryValue" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryValue"></a>

```java
public java.lang.String getQueryValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



